import { ApolloClient, HttpLink } from "@apollo/client/core";
import { InMemoryCache } from "@apollo/client/cache";

// HTTP connection to the API
// const httpLink = HttpLink({
//   // You should use an absolute URL here
//   uri: "http://localhost:1337/graphql",
// });

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: "http://localhost:1337/graphql",
  cache,
});

export default apolloClient;
