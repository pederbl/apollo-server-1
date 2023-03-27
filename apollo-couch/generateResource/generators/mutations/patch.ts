import { ResourceNameForms } from '../../lib/generateResourceNameForms';

export function generatePatchCode(resourceName: ResourceNameForms) {
  const { singularCapitalized, pluralLowerCase } = resourceName;

  return `import { mutateRecord, mutateRecords, MutationOperation, RecordMutationResult } from "src/graphql/lib/recordMutation";
import { ${singularCapitalized}PatchInput, RecordsMutationResponse } from "../../../generated-types";

const COLLECTION = "${pluralLowerCase}";
const MUTATION_OPERATION: MutationOperation = "patch";

type RecordMutationInput = ${singularCapitalized}PatchInput;

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