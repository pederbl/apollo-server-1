import { AccountsListResponse } from "src/graphql/generated-types";
import { getCouchbaseClient } from "../../../../../apollo-couch/src/couchbase/client";

export default async function resolver(_: any, __: any) : Promise<AccountsListResponse> {
    const { cluster } = await getCouchbaseClient();
    const query = "SELECT META().id, * FROM main.play.accounts";
    const response = await cluster.query(query);
    const outputRecords = response.rows.map((row: any) => { return { id: row.id, content: row.accounts } });
    console.log(outputRecords); 
    return {
        code: 200,
        message: "Success", 
        records: outputRecords
    }
}
