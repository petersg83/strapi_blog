import React from "react"
import { graphql } from "gatsby"

import PostsComponent from "../components/posts"
import Layout from "../components/layout"

export const query = graphql`
  query Category($id: Int!) {
    posts: allStrapiPost(filter: { category: { id: { eq: $id } } }) {
      edges {
        node {
          strapiId
          title
          category {
            name
          }
          cover {
            publicURL
          }
        }
      }
    }
    category: strapiCategory(strapiId: { eq: $id }) {
      name
    }
  }
`

const Category = ({ data }) => {
  const posts = data.posts.edges
  const category = data.category.name

  return (
    <Layout>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{category}</h1>
          <PostsComponent posts={posts} />
        </div>
      </div>
    </Layout>
  )
}

export default Category
