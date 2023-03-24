import { readdirSync } from 'fs';
import { MutationResolvers, QueryResolvers, Resolvers } from './generated-types';

const mutationResolvers: MutationResolvers = {}; 
const queryResolvers: QueryResolvers = {}; 

const resourceNames = readdirSync("src/graphql/resources");
for (const resourceName of resourceNames) {
  const resourceDirPath = "./src/graphql/resources/" + resourceName;
  const resourceDirImportPath = "./../graphql/resources/" + resourceName;
 
  const mutationNames = readdirSync(resourceDirPath + "/mutations").map(filename => filename.replace(/\.ts$/, ''));
  for (const mutationName of mutationNames) {
    const moduleImportPath = resourceDirImportPath + "/mutations/" + mutationName;
    const _module = await import(moduleImportPath);
    const resolver = _module.default; 
    if (typeof resolver !== 'function') {
      throw new Error('The default export is not a function: ' + moduleImportPath);
    }
    const resolverName = resourceName + mutationName; 
    mutationResolvers[resolverName] = resolver; 
  }

  const queryNames = readdirSync(resourceDirPath + "/queries").map(filename => filename.replace(/\.ts$/, ''));
  for (const queryName of queryNames) {
    const moduleImportPath = resourceDirImportPath + "/queries/" + queryName;
    const _module = await import(moduleImportPath);
    const resolver = _module.default; 
    if (typeof resolver !== 'function') {
      throw new Error('The default export is not a function:' + moduleImportPath);
    }
    const resolverName = resourceName + queryName; 
    queryResolvers[resolverName] = resolver; 
  }
}

const resolvers: Resolvers = {
  Mutation: mutationResolvers, 
  Query: queryResolvers
}

export default resolvers;
