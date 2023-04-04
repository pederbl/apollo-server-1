import { generateId, getCollection, handleCouchbaseError } from "apollo-couch";
import { Account, AccountContentInput, AccountsResponse } from "../../../generated-types";

const COLLECTION_NAME = "accounts";
const collection = await getCollection(COLLECTION_NAME);

async function createAccount(content: AccountContentInput): Promise<Account> {
  const id = generateId(COLLECTION_NAME);
  await collection.insert(id, content);
  return { id, content }
}

export async function resolver(_: any, { contents }: { contents: AccountContentInput[] }): Promise<AccountsResponse> {
  const results = await Promise.allSettled(contents.map(createAccount));
  const response = results.reduce<AccountsResponse>((acc, result) => {
      if (result.status === "fulfilled") {
        acc.records.push(result.value);
      } else {
        acc.errors.push(handleCouchbaseError(result.reason));
      }
      return acc;
    }, {
      records: [],
      errors: []
    }
  );
  return response;
}
