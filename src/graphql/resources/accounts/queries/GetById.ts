import { Account } from "src/graphql/generated-types";
import { getCouchbaseClient } from "../../../../../apollo-couch/src/couchbase/client";
//import { handleCouchbaseGetError } from "apollo-couch/src/graphql/lib/handleGetErrors";

async function fetchAccount(id: string): Promise<Account> {
    const { cluster } = await getCouchbaseClient();
    const query = "SELECT META().id, * FROM main.play.accounts";
    const response = await cluster.query(query);
    const outputRecords = response.rows.map((row: any) => { return { id: row.id, content: row.accounts } });
    return outputRecords;

    // const { scope } = await getCouchbaseClient();
    // const collection = scope.collection("accounts");
    // try {
    //     const result = await collection.get(id);
    //     return {
    //         code: '200',
    //         success: true,
    //         message: `Record fetched!`,
    //         id,
    //         document: result.content
    //     };
    // } catch (error) {
    //     if (error instanceof Error) {
    //         return handleCouchbaseGetError(error, id);
    //     } else {
    //         throw new Error(String(error));
    //     }
    // }
}

export default async function resolver(_: any, { ids }: { ids: string[] }): Promise<Account[]> {
    const fetchResults = await Promise.allSettled(ids.map(fetchAccount));
    const results = fetchResults.map(result => (result.status === 'fulfilled' ? result.value : result.reason));
    return results;
}
