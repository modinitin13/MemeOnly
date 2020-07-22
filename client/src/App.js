import React, { Component } from "react";

import { ApolloClient } from "@apollo/client";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
// import { HttpLink } from 'apollo-link-http'

import HomeFeed from "./Containers/HomeFeed"
const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache,
});
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h1>This is from App.js</h1>
          <HomeFeed />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
