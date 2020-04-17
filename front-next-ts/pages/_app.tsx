import React, {FC} from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import withData from '../utils/apollo';
import Head from 'next/head';

import '../assets/css/style.css';
import ApolloClient from 'apollo-client';
import {AppProps} from 'next/app';
import Nav from "../components/nav";

interface Props extends AppProps {
    apollo: ApolloClient<unknown>;
}

const App: FC<Props> = ({ Component, pageProps, apollo }) => (
    <ApolloProvider client={apollo}>
        <Head>
            <title>Strapi blog</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Staatliches"
            />
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"
            />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js" />
            <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js" />
        </Head>
        <Nav />
        <Component {...pageProps} />
    </ApolloProvider>
);

export default withData(App);
