import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider, gql } from "@apollo/client";

import { App } from "./App";

import { ApolloClient, InMemoryCache } from "@apollo/client";

import { editVendorId } from "./localVars";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        editVendorId: {
          read() {
            // reactive variable
            return editVendorId();
          },
        },
        vendors: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

cache.writeQuery({
  query: gql`
    query EditVendorId2 {
      editVendorId2
    }
  `,
  data: {
    editVendorId2: -1,
  },
});

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
