import crypto from "crypto"; 
import { getCouchbaseClient } from "../../../../data/couchbase/client";
import { AccountCreateInput } from "../../../generated-types";

export default async function create(_: any, { records }: { records: AccountCreateInput[] }) {
  const createdRecords = []; 
  for (const account of records) {
    const content = account.content;
    const { accountsCollection } = await getCouchbaseClient();
    const id = "acc:" + crypto.randomUUID(); 
    await accountsCollection.insert(id, content);
    createdRecords.push({ id: id, content: content });
  }
  return {
    code: '200',
    success: true,
    message: 'Account created!',
    records: createdRecords,
  };
}
