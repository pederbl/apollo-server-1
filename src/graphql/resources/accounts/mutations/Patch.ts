import { getCouchbaseClient } from "../../../../data/couchbase/client";
import { AccountPatchInput, RecordMutationResponse } from "../../../generated-types";
import handleCouchbaseError from "../../../lib/handle-couchbase-mutation-errors";

type StringIndexedAccountContent = {
  [key: string]: any;
};

async function patchAccount(account: AccountPatchInput) : Promise<RecordMutationResponse>{
    const content = account.content as StringIndexedAccountContent;
    const id = account.id;
  
    const { accountsCollection } = await getCouchbaseClient();
  
    try {
      const mutationBuilder = accountsCollection.mutateIn(id);
  
      for (const field in content) {
        mutationBuilder.replace(field, content[field]);
      }
  
      await mutationBuilder.execute();
  
      return {
        code: '200',
        success: true,
        message: `Record updated!`,
        id
      };
    } catch (error) {
      if (error instanceof Error) {
        return handleCouchbaseError(error, id);
      } else {
        throw new Error(String(error));
      }
    }
  }
  
  export default async function patch(_: any, { records }: { records: AccountPatchInput[] }): Promise<RecordMutationResponse[]> {
    const updatedRecords = [];
  
    for (const account of records) {
      const response = await patchAccount(account);
      updatedRecords.push(response);
    }
  
    return updatedRecords;
  }
  