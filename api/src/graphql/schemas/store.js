const { gql } = require('apollo-server-express')

module.exports = gql`

    enum type_social_network{
        FACEBOOK
        INSTAGRAM
        YOUTUBE
        TWITTER
        OTHER
    }

    type result {
        metadata: metadata
        items: [store]
    }

    type metadata {
        size: Int
    }

    type store {
        _id: String
        name: String
        slug: String
        phone: String
        address: String
        email: String
        website: String
        social_networks: [social_network]
        status: Boolean
        is_feature: Boolean
        created_at: String
    }

    type social_network {
        _id: String
        name: type_social_network
        link: String
    }

    input socialNetworkInput {
        name: type_social_network!
        link: String!
    }

    input createStoreInput {
        name: String!
        phone: String!
        email: String!
        website:String
        address: String!
        social_networks: [socialNetworkInput!]!
    }
`