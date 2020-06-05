import { graphql } from "react-apollo";
import { gql } from "apollo-boost";

const GET_STORES = gql`
  query getStores($filter: String, $offset: Int, $limit: Int) {
    stores(filter: $filter, offset: $offset, limit: $limit) {
      metadata {
        size
        offset
        total_pagination
      }
      items {
        _id
        name
        slug
        phone
        address
        email
        website
        social_networks {
          name
          link
        }
        status
        is_feature
      }
    }
  }
`;


export const storiesByFilter = graphql(GET_STORES)