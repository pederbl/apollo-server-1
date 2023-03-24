import { readdirSync } from 'fs';
import { join } from 'path';
import { Resolvers } from './generated-types';

type ResolverType = 'mutations' | 'queries';

async function importResolver(resolverType: ResolverType, resourceName: string, resolverName: string) {
  const moduleImportPath = join("..", "graphql", "resources", resourceName, resolverType, resolverName);
  const _module = await import(moduleImportPath);
  const resolver = _module.default;
  if (typeof resolver !== 'function') {
    throw new Error(`The default export is not a function: ${moduleImportPath}`);
  }
  return resolver;
}

function getResolverNames(resourceName: string, resolverType: ResolverType): string[] {
  const resolverDirPath = join("src", "graphql", "resources", resourceName, resolverType);
  return readdirSync(resolverDirPath).map(filename => filename.replace(/\.ts$/, ''));
}

async function getResolvers(resolverType: ResolverType): Promise<Record<string, Function>> {
  const resolvers: Record<string, Function> = {};

  const resourceNames = readdirSync(join("src", "graphql", "resources"));
  const tasks = resourceNames.map(async (resourceName) => {
    const resolverNames = getResolverNames(resourceName, resolverType);
    const resolverTasks = resolverNames.map(async (resolverName) => {
      const resolver = await importResolver(resolverType, resourceName, resolverName);
      const resolverFullName = `${resourceName}${resolverName}`;
      resolvers[resolverFullName] = resolver;
    });
    await Promise.all(resolverTasks);
  });
  await Promise.all(tasks);

  return resolvers;
}

const [mutationResolvers, queryResolvers] = await Promise.all([
  getResolvers('mutations'),
  getResolvers('queries'),
]);

const resolvers: Resolvers = {
  Mutation: mutationResolvers,
  Query: queryResolvers,
};

export default resolvers;
