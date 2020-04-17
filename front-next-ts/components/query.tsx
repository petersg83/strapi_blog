import React, {FC} from 'react';
import {QueryHookOptions, useQuery} from '@apollo/react-hooks';
import {DocumentNode} from "graphql";

interface Props<T> {
    children: FC<{ data?: T }>,
    query: DocumentNode,
    options?: QueryHookOptions
}

function Query<T>({ children, query, options }: Props<T>) {
    const { data, loading, error } = useQuery<T>(query, options);

    if (loading) {
        return <p>Loading</p>;
    }

    if (error) {
        return <p>Error: {JSON.stringify(error)}</p>
    }

    return children({ data } );
}

export default Query;