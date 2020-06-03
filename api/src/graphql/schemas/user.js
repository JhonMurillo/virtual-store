const { gql } = require('apollo-server-express')

module.exports = gql`

    type user {
        _id: String
        first_name: String
        last_name: String
        email: String
        phone: String
        avatar: String
        roles: [String]
        status: Boolean
        created_at: String
    }

    enum roles {
        CLIENT
        STORE
        ADMIN
    }

    input signupInput {
        first_name: String!
        last_name: String!
        email: String!
        phone: String!
        password: String!
        roles: [roles!]!
    }

    input credentials {
        email: String!
        password: String!
    }

    type login {
        token: String
        avatar: String
        roles: [roles]
    }
`