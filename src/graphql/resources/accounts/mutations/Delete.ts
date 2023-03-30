import { mutateRecord, mutateRecords, MutationOperation, RecordMutationResult } from "../../../../../apollo-couch/src/graphql/lib/recordMutation";
import { AccountDeleteInput, RecordsMutationResponse } from "../../../generated-types";

const COLLECTION = "accounts";
const MUTATION_OPERATION: MutationOperation = "delete"; 

async function recordMutator(record: AccountDeleteInput): 
Promise<RecordMutationResult> {
  return mutateRecord(record, COLLECTION, MUTATION_OPERATION);
}

export default async function resolver(_: any, { records }: { records: AccountDeleteInput[] }): 
Promise<RecordsMutationResponse> {
  return mutateRecords<AccountDeleteInput>(records, recordMutator);
}
