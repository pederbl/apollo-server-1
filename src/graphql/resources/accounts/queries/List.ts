import { Account } from "src/graphql/generated-types";
import { getCouchbaseClient } from "../../../../../apollo-couch/data/couchbase/client";

export default async function get(_: any, __: any) : Promise<Account[]> {
    const { cluster } = await getCouchbaseClient();
    const query = "SELECT META().id, * FROM main.play.accounts";
    const response = await cluster.query(query);
    const outputRecords = response.rows.map((row: any) => { return { id: row.id, content: row.accounts } });
    return outputRecords;
}
