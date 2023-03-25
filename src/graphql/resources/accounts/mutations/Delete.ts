import { getCouchbaseClient } from "../../../../data/couchbase/client";
import { RecordDeleteInput } from "../../../generated-types";
import handleCouchbaseError from "../../../lib/handle-couchbase-mutation-errors";

async function deleteAccount(account: RecordDeleteInput) {
    const id = account.id;

    const { accountsCollection } = await getCouchbaseClient();

    try {
        await accountsCollection.remove(id);
        return {
            code: '200',
            success: true,
            message: `Record deleted!`,
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

export default async function deleteAccounts(_: any, { records }: { records: RecordDeleteInput[] }) {
    const deleteResults = await Promise.allSettled(records.map(deleteAccount));
    const results = deleteResults.map(result => (result.status === 'fulfilled' ? result.value : result.reason));
    return results;
}
