import { ResourceNameForms } from '../../lib/generateResourceNameForms';

export function generateCreateCode(resourceName: ResourceNameForms) {
  const { singularLowerCase, singularCapitalized, pluralLowerCase } = resourceName;

  return `import { generateId, mutateRecord, mutateRecords, MutationOperation, RecordMutationResult } from "src/graphql/lib/recordMutation";
import { ${singularCapitalized}CreateInput, RecordsMutationResponse } from "../../../generated-types";

const COLLECTION = "${pluralLowerCase}";
const MUTATION_OPERATION: MutationOperation = "insert";
const COLLECTION_ID_PREFIX = "${singularLowerCase.slice(0, 3)}"

type RecordMutationInput = ${singularCapitalized}CreateInput;

async function recordMutator(record: RecordMutationInput): 
Promise<RecordMutationResult> {
  const id = generateId(COLLECTION_ID_PREFIX);
  const recordWithId = { ...record, id }
  return mutateRecord(recordWithId, COLLECTION, MUTATION_OPERATION);
}

export default async function resolver(_: any, { records }: { records: RecordMutationInput[] }): 
Promise<RecordsMutationResponse> {
  return mutateRecords<RecordMutationInput>(records, recordMutator);
}
`;
}