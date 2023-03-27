import { AccountGetByIdResponse } from "src/graphql/generated-types";
import { getCouchbaseClient } from "../../../../../apollo-couch/data/couchbase/client";
import { handleCouchbaseGetError } from "../../../lib/handle-couchbase-get-errors";

async function fetchAccount(id: string): Promise<AccountGetByIdResponse> {
    const { scope } = await getCouchbaseClient();
    const collection = scope.collection("accounts");
    try {
        const result = await collection.get(id);
        return {
            code: '200',
            success: true,
            message: `Record fetched!`,
            id,
            document: result.content
        };
    } catch (error) {
        if (error instanceof Error) {
            return handleCouchbaseGetError(error, id);
        } else {
            throw new Error(String(error));
        }
    }
}

export default async function fetchAccounts(_: any, { ids }: { ids: string[] }): Promise<AccountGetByIdResponse[]> {
    const fetchResults = await Promise.allSettled(ids.map(fetchAccount));
    const results = fetchResults.map(result => (result.status === 'fulfilled' ? result.value : result.reason));
    return results;
}
