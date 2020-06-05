import React, { useState, useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useApolloClient } from 'react-apollo';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';
import { SearchInput } from '../components/SearchBar';

import { ListOfStores as ListOfStoresComponent } from '../components/ListOfStores';

export const ListOfStores = () => {
  const LIMIT = 2;
  const client = useApolloClient();
  const [activePage, setActivePage] = useState(1);
  const [filter, setFilter] = useState(undefined);
  const [items, setItems] = useState([]);
  const [metadata, setMetadata] = useState({});
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const GET_STORES = gql`
    query getStores($filter: String, $offset: Int, $limit: Int) {
      stores(filter: $filter, offset: $offset, limit: $limit) {
        metadata {
          size
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

  const fetch = async ({ offset }) => {
    setLoading(true);
    const { loading, error, data } = await client.query({
      query: GET_STORES,
      variables: { filter, offset, limit: LIMIT },
      fetchPolicy: 'network-only',
    });
    setError(error);
    setLoading(loading);
    const { stores: { items, metadata } = {} } = data;
    setMetadata(metadata);
    setItems(items);
    setLoading(loading);
  };

  useEffect(() => {
    fetch({ offset: 0 });
  }, []);

  const onSearch = () => {
    fetch({ offset: 0 });
  };

  const onGetFilter = (e) => {
    setFilter(e.target.value);
  };

  const onChangePagination = async (currentPage) => {
    setActivePage(currentPage);
    await fetch({ offset: (currentPage - 1) * LIMIT });
  };

  const showList = () => {
    if (!loading && !error) {
      return (
        <ListOfStoresComponent
          stores={items}
          metadata={metadata}
          limit={LIMIT}
          onChangePagination={onChangePagination}
          activePage={activePage}
        />
      );
    }
    return null;
  };

  return (
    <>
      <SearchInput onClick={onSearch} onChange={onGetFilter} />
      <hr />
      {loading && <Loading IsSkeleton={true} colsSkeleton={10} />}
      {error && <Error showError={error} message={error.message} />}
      {showList()}
    </>
  );
};
