import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { setContext } from 'apollo-link-context'
import { onError } from "apollo-link-error";

import Context from './Context'

const cache = new InMemoryCache()

const httpLink = new HttpLink({
  uri: 'http://localhost:3001/graphql'
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = window.sessionStorage.getItem('token')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const resetToken = onError(({ networkError }) => {
  console.error(JSON.stringify(networkError))
  if (networkError && networkError.name === 'ServerError' && networkError.statusCode === 401) {
    // remove cached token on 401 from the server
    window.sessionStorage.removeItem('token')
  }
})

const authLinkFlow = authLink.concat(resetToken)

const client = new ApolloClient({
  cache,
  link: authLinkFlow.concat(httpLink)
})

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
