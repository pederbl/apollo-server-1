import { getCollection, handleCouchbaseError } from "apollo-couch";
import { AccountsDeleteResponse } from "../../../generated-types";

const COLLECTION_NAME = "accounts";
const collection = await getCollection(COLLECTION_NAME);

async function deleteAccount(id: string): Promise<string> {
  await collection.remove(id); 
  return id;
}

export async function resolver(_: any, { ids }: { ids: string[] }): Promise<AccountsDeleteResponse> {
  const results = await Promise.allSettled(ids.map(deleteAccount));
  const response = results.reduce<AccountsDeleteResponse>((acc, result) => {
      if (result.status === "fulfilled") {
        acc.deletedIds.push(result.value);
      } else {
        acc.errors.push(handleCouchbaseError(result.reason));
      }
      return acc; 
    }, {
      deletedIds: [], 
      errors: []  
    }
  );

  return response;
}
