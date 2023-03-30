import { generateId, mutateRecord, mutateRecords, MutationOperation, RecordMutationResult } from "../../../../../apollo-couch/src/graphql/lib/recordMutation";
import { AccountCreateInput, RecordsMutationResponse } from "../../../generated-types";

const COLLECTION = "accounts";
const MUTATION_OPERATION: MutationOperation = "insert"; 
const COLLECTION_ID_PREFIX = "acc";

async function recordMutator(record: AccountCreateInput): 
Promise<RecordMutationResult> {
  const id = generateId(COLLECTION_ID_PREFIX);
  const recordWithId = { ...record, id }
  return mutateRecord(recordWithId, COLLECTION, MUTATION_OPERATION);
}

export default async function resolver(_: any, { records }: { records: AccountCreateInput[] }): 
Promise<RecordsMutationResponse> {
  return mutateRecords<AccountCreateInput>(records, recordMutator);
}
