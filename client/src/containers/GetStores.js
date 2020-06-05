import React from 'react';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';
import { ListOfStores } from '../components/ListOfStores';

const LIMIT = 2;

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

const renderProp = ({ loading, error, data }) => {
  if (loading) return <Loading IsSkeleton={true} colsSkeleton={10} />;
  if (error) return <Error showError={error} message={error.message} />;
  const { stores: { items, metadata } = {} } = data;
  return <ListOfStores stores={items} metadata={metadata} limit={LIMIT} />;
};

export const AllStores = ({ offset = 0, filter }) => (
  <Query
    query={GET_STORES}
    variables={{ filter: filter, offset: offset, limit: LIMIT }}
    fetchPolicy="network-only"
  >
    {renderProp}
  </Query>
);
