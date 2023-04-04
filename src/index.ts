import { startApolloCouchServer } from "apollo-couch";
// import customTypeDefs from "./graphql/custom-type-defs"; // If you have custom type definitions
// import customResolvers from "./graphql/custom-resolvers"; // If you have custom resolvers

const port = 4000;

// You can pass custom type definitions and resolvers if needed, along with the context
startApolloCouchServer(port); //, customTypeDefs, customResolvers);
