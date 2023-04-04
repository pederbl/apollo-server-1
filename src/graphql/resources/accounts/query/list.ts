import { getCouchbaseClient } from "apollo-couch";
import { AccountsListInput, AccountsListResponse } from "src/graphql/generated-types";

const COLLECTION = "accounts";

export async function resolver(_: any, { query }: { query: AccountsListInput }) : Promise<AccountsListResponse> {
    const { cluster } = await getCouchbaseClient();
    let queryString = `SELECT META().id, * FROM main.play.${COLLECTION}`;
    const response = await cluster.query(queryString);
    const records = response.rows.map((row: any) => { return { id: row.id, content: row[COLLECTION] } });

    return {
        code: 200,
        message: "Success", 
        records: records
    }
}
