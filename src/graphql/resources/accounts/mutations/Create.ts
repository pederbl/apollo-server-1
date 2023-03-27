import { generateId, mutateRecord, mutateRecords, MutationOperation, RecordMutationResult } from "src/graphql/lib/recordMutation";
import { AccountCreateInput, RecordsMutationResponse } from "../../../generated-types";

const COLLECTION = "accounts";
const MUTATION_OPERATION: MutationOperation = "insert"; 
const COLLECTION_ID_PREFIX = "acc"

type RecordMutationInput = AccountCreateInput; 

async function recordMutator(record: RecordMutationInput): 
Promise<RecordMutationResult> {
  const id = generateId(COLLECTION_ID_PREFIX);
  const recordWithId = { ...record, id }
  return mutateRecord(recordWithId, COLLECTION, MUTATION_OPERATION);
}

export default async function handler(_: any, { records }: { records: RecordMutationInput[] }): 
Promise<RecordsMutationResponse> {
  return mutateRecords<RecordMutationInput>(records, recordMutator);
}
