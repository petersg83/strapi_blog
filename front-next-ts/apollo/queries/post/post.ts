import gql from "graphql-tag";

const POST_QUERY = gql`
    query Posts($id: ID!) {
        post(id: $id) {
            id
            title
            content
            cover {
                url
            }
            created_at
        }
    }
`;

export default POST_QUERY;