import { getCollection, handleCouchbaseError } from "apollo-couch";
import { MutateInSpec } from "couchbase";
import { Account, AccountPatchInput, AccountsResponse } from "../../../generated-types";

const COLLECTION_NAME = "accounts";
const collection = await getCollection(COLLECTION_NAME);

async function patchAccount(record: AccountPatchInput): Promise<Account> {
  const specs = Object.entries(record.content).map(([field, value]) => {
    return MutateInSpec.upsert(field, value);
  });        
  await collection.mutateIn(record.id, specs);
  const account = await collection.get(record.id); 
  return { id: record.id, content: account.content };
}

export async function resolver(_: any, { records }: { records: AccountPatchInput[] }): Promise<AccountsResponse> {
  const results = await Promise.allSettled(records.map(patchAccount));
  const response = results.reduce<AccountsResponse>((acc, result) => {
      console.log(result); 
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
