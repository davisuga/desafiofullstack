import { ApolloClient, InMemoryCache } from "@apollo/client";
import "cross-fetch/polyfill";

const cache = new InMemoryCache();

export default new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  uri: "http://localhost:3000/api/graphql",
});
