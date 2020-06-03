import React from 'react'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { Loading } from '../components/Loading'
import { Error } from '../components/Error'
import { ListOfProducts } from '../components/ListOfProducts'

const GET_PRODUCTS = gql`
    query getProducts {
        products {
            _id
            name
            slug
            sku
            title
            description
            price
            price_old
            categories
            images {
              is_principal
              src
            }
        }
}
`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <Loading IsSkeleton={true} colsSkeleton={10} />
  if (error) return <Error showError={error} message={error.message} />
  const { products } = data
  return <ListOfProducts products={products} />
}

export const AllProducts = () => (

  <Query query={GET_PRODUCTS} fetchPolicy='network-only'>
    {
      renderProp
    }
  </Query>
)
