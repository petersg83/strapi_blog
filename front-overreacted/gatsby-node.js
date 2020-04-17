exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        posts: allStrapiPost {
          edges {
            node {
              strapiId
            }
          }
        }
        categories: allStrapiCategory {
          edges {
            node {
              strapiId
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.posts.edges
  const categories = result.data.categories.edges

  posts.forEach((post, index) => {
    createPage({
      path: `/post/${post.node.strapiId}`,
      component: require.resolve("./src/templates/post.js"),
      context: {
        id: post.node.strapiId,
      },
    })
  })

  categories.forEach((category, index) => {
    createPage({
      path: `/category/${category.node.strapiId}`,
      component: require.resolve("./src/templates/category.js"),
      context: {
        id: category.node.strapiId,
      },
    })
  })
}
