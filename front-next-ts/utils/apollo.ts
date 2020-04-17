import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import withApollo from 'next-with-apollo';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

const GRAPHQL_URL = process.env.BACKEND_URL || 'http://localhost:1337/graphql';

const link = createHttpLink({
    fetch,
    uri: GRAPHQL_URL
});

// Export a HOC from next-with-apollo
// Docs: https://www.npmjs.com/package/next-with-apollo
export default withApollo(
    ({ initialState }) => {
        return new ApolloClient({
            link,
            cache: new InMemoryCache().restore(initialState || {})
        });
    }
);
