import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: 'https://graphql.bitquery.io/',
  cache: new InMemoryCache(),
  headers: {
    'X-API-KEY': process.env.REACT_APP_API_KEY || '',
  },
});
