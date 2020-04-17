import React, {FC} from 'react';
import Card from './card';
import Post from "../interfaces/post";

interface Props {
    posts: Post[];
}

const Posts: FC<Props> = ({ posts }) => {
    const leftPostsCount = Math.ceil(posts.length / 5);
    const leftPosts = posts.slice(0, leftPostsCount);
    const rightPosts = posts.slice(leftPostsCount, posts.length);

    return (
        <div>
            <div className="uk-child-width-1-2" data-uk-grid>
                <div>
                    {leftPosts.map((post) => {
                        return <Card post={post} key={`post_${post.id}`} />;
                    })}
                </div>
                <div>
                    <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
                        {rightPosts.map((post) => {
                            return <Card post={post} key={`post_${post.id}`} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Posts;