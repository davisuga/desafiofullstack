import { ApolloClient, InMemoryCache } from "@apollo/client";
import "cross-fetch/polyfill";

const cache = new InMemoryCache();
const uri = process.env.VERCEL_URL
  ? `${process.env.VERCEL_URL}/api/graphql`
  : "http://localhost:3000/api/graphql";
export default new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  uri,
});
