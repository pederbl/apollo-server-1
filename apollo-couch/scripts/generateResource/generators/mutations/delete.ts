import { ResourceNameForms } from '../../lib/generateResourceNameForms';

export function generateDeleteCode(resourceName: ResourceNameForms) {
  const { singularCapitalized, pluralLowerCase } = resourceName;

  return `import { mutateRecord, mutateRecords, MutationOperation, RecordMutationResult } from "src/graphql/lib/recordMutation";
import { ${singularCapitalized}DeleteInput, RecordsMutationResponse } from "../../../generated-types";

const COLLECTION = "${pluralLowerCase}";
const MUTATION_OPERATION: MutationOperation = "delete";

type RecordMutationInput = ${singularCapitalized}DeleteInput;

async function recordMutator(record: RecordMutationInput): 
Promise<RecordMutationResult> {
  return mutateRecord(record, COLLECTION, MUTATION_OPERATION);
}

export default async function resolver(_: any, { records }: { records: RecordMutationInput[] }): 
Promise<RecordsMutationResponse> {
  return mutateRecords<RecordMutationInput>(records, recordMutator);
}
`;
}