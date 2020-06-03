const { gql } = require('apollo-server-express')

module.exports = gql`

    type product {
        _id: String
        name: String
        slug: String
        sku: String
        title: String
        description: String
        price: Int
        price_old: Int,
        quantity_avaiable: Int,
        images: [image],
        store: String
        categories:[String]
        rating: Int,
        status: Boolean
        created_at: String
    }

    type image {
        _id: String
        src: String
        is_principal: Boolean
    }

    input ProductInput {
        name: String!
        sku: String!
        title: String!
        description: String!
        price: Int!
        price_old: Int!
        quantity_avaiable: Int!
        images: [imageInput!]!
        store: String!
        categories:[String!]!
    }

    input imageInput {
        src: String!
        is_principal: Boolean!
    }

`