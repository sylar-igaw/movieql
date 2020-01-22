 import { GraphQLServer } from "graphql-yoga";
 import resolvers from './graphql/resolvers'

console.log("test");
const server = new GraphQLServer({
    typeDefs : "./graphql/scheme.graphql",
    resolvers
});
server.start(() => console.log('Server is running on localhost:4000'));