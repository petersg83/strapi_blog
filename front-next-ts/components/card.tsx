import React, {FC} from 'react';
import Link from 'next/link';
import Post from "../interfaces/post";

interface Props {
    post: Post
}

const Card: FC<Props> = ({ post }) => {
    return (
        <Link href={{ pathname: "post", query: { id: post.id } }}>
            <a className="uk-link-reset">
                <div className="uk-card uk-card-muted">
                    <div className="uk-card-media-top">
                        <img
                            src={process.env.API_URL + post.cover.url}
                            alt={post.cover.url}
                            height="120"
                        />
                    </div>
                    <div className="uk-card-body">
                        <p id="category" className="uk-text-uppercase">
                            {post.category.name}
                        </p>
                        <p id="title" className="uk-text-large">
                            {post.title}
                        </p>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default Card;