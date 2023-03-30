import { mutateRecord, mutateRecords, MutationOperation, RecordMutationResult } from "../../../../../apollo-couch/src/graphql/lib/recordMutation";
import { AccountPatchInput, RecordsMutationResponse } from "../../../generated-types";

const COLLECTION = "accounts";
const MUTATION_OPERATION: MutationOperation = "patch"; 

async function recordMutator(record: AccountPatchInput): 
Promise<RecordMutationResult> {
  return mutateRecord(record, COLLECTION, MUTATION_OPERATION);
}

export default async function resolver(_: any, { records }: { records: AccountPatchInput[] }): 
Promise<RecordsMutationResponse> {
  return mutateRecords<AccountPatchInput>(records, recordMutator);
}
