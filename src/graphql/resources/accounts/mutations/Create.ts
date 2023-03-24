import crypto from "crypto"; 
import { getCouchbaseClient } from "../../../../data/couchbase/client";
import { AccountCreateInput } from "../../../generated-types";

export default async function create(_: any, { account }: { account: AccountCreateInput }) {
    const content = account.content;
    const { accountsCollection } = await getCouchbaseClient();
    const id = "acc:" + crypto.randomUUID(); 
    await accountsCollection.insert(id, content);
    return {
      code: '200',
      success: true,
      message: 'Account created!',
      account: {
        id: id, 
        content: content
      },
    };
}
