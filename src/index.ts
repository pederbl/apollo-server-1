import * as dotenv from 'dotenv' 
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/type-defs';

dotenv.config();

export interface MyContext {};
  
const server = new ApolloServer<MyContext>({ typeDefs, resolvers });

const { url } = await startStandaloneServer<MyContext>(server, {
    listen: { port: 4000 },
    context: async () => {
        return {};
    }
});
  
console.log(`🚀  Server ready at: ${url}`);

export {}