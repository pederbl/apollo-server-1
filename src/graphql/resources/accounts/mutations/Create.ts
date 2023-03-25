import crypto from "crypto"; 
import handleCouchbaseError from "../../../lib/handle-couchbase-mutation-errors";
import { getCouchbaseClient } from "../../../../data/couchbase/client";
import { AccountCreateInput, RecordMutationResponse } from "../../../generated-types";

async function createAccount(account: AccountCreateInput) {
  const content = account.content;
  const id = "acc:" + crypto.randomUUID();

  const { accountsCollection } = await getCouchbaseClient();

  try {
    await accountsCollection.insert(id, content);
    return {
      code: '200',
      success: true,
      message: `Account ${id} created!`,
      id,
      content,
    };
  } catch (error) {
    if (error instanceof Error) {
      return handleCouchbaseError(error, id);
    } else {
      throw new Error(String(error));
    }
  }
}

export default async function create(_: any, { records }: { records: AccountCreateInput[] }): Promise<RecordMutationResponse[]> {
  const createdRecords = [];

  for (const account of records) {
    const response = await createAccount(account);
    createdRecords.push(response);
  }

  return createdRecords;
}
