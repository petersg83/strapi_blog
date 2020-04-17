import gql from "graphql-tag";

const POSTS_QUERY = gql`
    query Posts {
        posts {
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