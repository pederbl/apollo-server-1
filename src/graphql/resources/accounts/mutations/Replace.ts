import { getCouchbaseClient } from "../../../../data/couchbase/client";
import { AccountReplaceInput } from "../../../generated-types";
import handleCouchbaseError from "../../../lib/handle-couchbase-mutation-errors";

async function replaceAccount(account: AccountReplaceInput) {
    const content = account.content;
    const id = account.id;

    const { accountsCollection } = await getCouchbaseClient();

    try {
        await accountsCollection.replace(id, content);
        return {
            code: '200',
            success: true,
            message: `Record replaced!`,
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

export default async function replace(_: any, { records }: { records: AccountReplaceInput[] }) {
    const replaceResults = await Promise.allSettled(records.map(replaceAccount));
    const results = replaceResults.map(result => (result.status === 'fulfilled' ? result.value : result.reason));
    return results;
}

