import gql from 'graphql-tag';

const query = gql`
query {
    users {
        id,
        name,
        car {
            id,
            make,
            model,
            color
        }
    }
}`;

export default query;