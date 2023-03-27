import { ResourceNameForms } from '../../lib/generateResourceNameForms';

export function generateReplaceCode(resourceName: ResourceNameForms) {
  const { singularCapitalized, pluralLowerCase } = resourceName;

  return `import { mutateRecord, mutateRecords, MutationOperation, RecordMutationResult } from "src/graphql/lib/recordMutation";
import { ${singularCapitalized}ReplaceInput, RecordsMutationResponse } from "../../../generated-types";

const COLLECTION = "${pluralLowerCase}";
const MUTATION_OPERATION: MutationOperation = "replace";

type RecordMutationInput = ${singularCapitalized}ReplaceInput;

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