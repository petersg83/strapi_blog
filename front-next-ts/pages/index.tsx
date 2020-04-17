import React, {FC} from 'react';
import Posts from '../components/posts';
import Query from '../components/query';
import POSTS_QUERY from "../apollo/queries/post/posts";
import Post from "../interfaces/post";

interface QueryType {
    posts: Post[];
}

const Home: FC = () => {
    return (
        <div>
            <div className="uk-section">
                <div className="uk-container uk-container-large">
                    <h1>Pierre blog</h1>
                    <Query<QueryType> query={POSTS_QUERY}>
                        {({ data }) => {
                            return data ? <Posts posts={data.posts} /> : null;
                        }}
                    </Query>
                </div>
            </div>
        </div>
    );
};

export default Home;