import React from "react"
import { Link } from "gatsby"

const Card = ({ post }) => {
  return (
    <Link to={`/post/${post.node.strapiId}`} className="uk-link-reset">
      <div className="uk-card uk-card-muted">
        <div className="uk-card-media-top">
          <img
            src={post.node.cover.publicURL}
            alt={post.node.cover.publicURL}
            height="100"
          />
        </div>
        <div className="uk-card-body">
          <p id="category" className="uk-text-uppercase">
            {post.node.category.name}
          </p>
          <p id="title" className="uk-text-large">
            {post.node.title}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Card
