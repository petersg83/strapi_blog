import React from 'react';

import Posts from '../components/posts';
import Query from '../components/query';
import POSTS_QUERY from "../apollo/queries/post/posts";
import Post from "../interfaces/post"
import {withRouter} from "next/router";

interface QueryType {
    posts: Post[];
}

const Category = withRouter(({ router }) => {
    const category = router.query.name;

    return (
        <div>
            <div className="uk-section">
                <div className="uk-container uk-container-large">
                    <h1>{category}</h1>
                    <Query<QueryType> query={POSTS_QUERY} options={{ variables: { category }}}>
                        {({ data }) => {
                            return data ? <Posts posts={data.posts} /> : null;
                        }}
                    </Query>
                </div>
            </div>
        </div>
    );
});

export default Category;