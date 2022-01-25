import { ApolloClient, InMemoryCache } from "@apollo/client";
import "cross-fetch/polyfill";

const cache = new InMemoryCache();

const uri =
  process.env.NODE_ENV !== "development"
    ? "/api/graphql"
    : "http://localhost:3000/api/graphql";

export default new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  uri,
});
