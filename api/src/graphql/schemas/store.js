const { gql } = require('apollo-server-express')

module.exports = gql`

    type store {
        _id: String
        name: String
        slug: String
        phone: String
        address: String
        email: String
        social_networks: [social_network]
        status: Boolean
        created_at: String
    }

    type social_network {
        _id: String
        name: String
        link: String
    }

    input socialNetworkInput {
        name: String!
        link: String!
    }

    input createStoreInput {
        name: String!
        phone: String!
        email: String!
        address: String!
        social_networks: [socialNetworkInput!]!
    }
`