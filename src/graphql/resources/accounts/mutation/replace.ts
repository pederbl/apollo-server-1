import { getCollection, handleCouchbaseError } from "apollo-couch";
import { MutateInSpec } from "couchbase";
import { Account, AccountReplaceInput, AccountsResponse } from "../../../generated-types";

const COLLECTION_NAME = "accounts";
const collection = await getCollection(COLLECTION_NAME);

async function replaceAccount(record: AccountReplaceInput): Promise<Account> {
  const specs = Object.entries(record.content).map(([field, value]) => {
    return MutateInSpec.upsert(field, value);
  });        
  await collection.mutateIn(record.id, specs);
  return record;
}

export async function resolver(_: any, { records }: { records: AccountReplaceInput[] }): Promise<AccountsResponse> {
  const results = await Promise.allSettled(records.map(replaceAccount));
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
