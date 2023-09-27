import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://hub.snapshot.org/graphql/",
  cache: new InMemoryCache(),
});
