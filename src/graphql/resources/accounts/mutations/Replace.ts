import { mutateRecord, mutateRecords, MutationOperation, RecordMutationResult } from "src/graphql/lib/recordMutation";
import { AccountReplaceInput, RecordsMutationResponse } from "../../../generated-types";

const COLLECTION = "accounts";
const MUTATION_OPERATION: MutationOperation = "replace"; 

type RecordMutationInput = AccountReplaceInput; 

async function recordMutator(record: RecordMutationInput): 
Promise<RecordMutationResult> {
  return mutateRecord(record, COLLECTION, MUTATION_OPERATION);
}

export default async function handler(_: any, { records }: { records: RecordMutationInput[] }): 
Promise<RecordsMutationResponse> {
  return mutateRecords<RecordMutationInput>(records, recordMutator);
}
