import gql from "graphql-tag";

const POSTS_QUERY = gql`
    query Posts($category: String) {
        posts(
            where: {
                category: {
                    name: $category
                }
            }
        ){
            id
            title
            category {
                name
            }
            cover {
                url
                formats
            }
        }
    }
`;

export default POSTS_QUERY;