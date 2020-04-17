import React, {FC} from 'react';
import { useQuery } from '@apollo/react-hooks';
import {DocumentNode} from "graphql";

interface Props<T> {
    children: FC<{ data?: T }>,
    query: DocumentNode,
    id?: number | null | string | string[]
}

function Query<T>({ children, query, id }: Props<T>) {
    const { data, loading, error } = useQuery<T>(query, { variables: { id }});

    if (loading) {
        return <p>Loading</p>;
    }

    if (error) {
        return <p>Error: {JSON.stringify(error)}</p>
    }

    return children({ data } );
}

export default Query;