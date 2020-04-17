import React from 'react';
import { useRouter } from "next/router";
import Query from "../components/query";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import POST_QUERY from "../apollo/queries/post/post";
import Post from "../interfaces/post";

interface QueryType {
    post: Post;
}

const Article = () => {
    const router = useRouter();
    return (
        <Query<QueryType> query={POST_QUERY} id={router.query.id}>
            {({ data }) => {
                if (!data) return null;

                const { post } = data;
                return (
                    <div>
                        <div
                            id="banner"
                            className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
                            data-src={process.env.API_URL + post.cover.url}
                            data-srcset={process.env.API_URL + post.cover.url}
                            data-uk-img
                        >
                            <h1>{post.title}</h1>
                        </div>

                        <div className="uk-section">
                            <div className="uk-container uk-container-small">
                                <ReactMarkdown source={post.content} />
                                <p>
                                    <Moment format="MMM Do YYYY">{post.created_at}</Moment>
                                </p>
                            </div>
                        </div>
                    </div>
                );
            }}
        </Query>
    );
};

export default Article;