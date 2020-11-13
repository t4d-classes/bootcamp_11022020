const { ApolloServer } = require('apollo-server');

const FetchMethodUrlRedisCache = require('./FetchMethodUrlRedisCache');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const { VendorsAPI } = require('./apis/VendorsAPI');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cache: new FetchMethodUrlRedisCache({
    port: 6379,
    host: 'cache-server-app',
  }),
  dataSources: () => ({
    vendorsAPI: new VendorsAPI('http://rest-server-app:3050'),
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready as ${url}`);
});
