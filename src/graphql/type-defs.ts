import { readFileSync, readdirSync } from "fs";

const resourceNames = readdirSync('src/graphql/resources');
const resourceTypeDefs = resourceNames.map(resourceName => readFileSync('./src/graphql/resources/' + resourceName + "/schema.graphql", { encoding: 'utf-8' })).join("\n");

const apolloCouchTypeDefs = readFileSync('./apollo-couch/src/graphql/schema.graphql', { encoding: 'utf-8' });
const typeDefs = resourceTypeDefs + "\n" + apolloCouchTypeDefs; 

export default typeDefs;
