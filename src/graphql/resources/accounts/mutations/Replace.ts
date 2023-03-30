import { mutateRecord, mutateRecords, MutationOperation, RecordMutationResult } from "../../../../../apollo-couch/src/graphql/lib/recordMutation";
import { AccountReplaceInput, RecordsMutationResponse } from "../../../generated-types";

const COLLECTION = "accounts";
const MUTATION_OPERATION: MutationOperation = "replace"; 

async function recordMutator(record: AccountReplaceInput): 
Promise<RecordMutationResult> {
  return mutateRecord(record, COLLECTION, MUTATION_OPERATION);
}

export default async function resolver(_: any, { records }: { records: AccountReplaceInput[] }): 
Promise<RecordsMutationResponse> {
  return mutateRecords<AccountReplaceInput>(records, recordMutator);
}
