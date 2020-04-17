import React from "react"
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"
import Moment from "react-moment"

import Layout from "../components/layout"

export const query = graphql`
  query PostQuery($id: Int!) {
    strapiPost(strapiId: { eq: $id }) {
      strapiId
      title
      content
      published_at
      cover {
        publicURL
      }
    }
  }
`

const Post = ({ data }) => {
  const post = data.strapiPost
  return (
    <Layout>
      <div>
        <div
          id="banner"
          className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
          data-src={post.cover.publicURL}
          data-srcset={post.cover.publicURL}
          data-uk-img
        >
          <h1>{post.title}</h1>
        </div>

        <div className="uk-section">
          <div className="uk-container uk-container-small">
            <ReactMarkdown source={post.content} />
            <p>
              <Moment format="MMM Do YYYY">{post.published_at}</Moment>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Post
