const { gql } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const { printGQL } = require('../helpers/printGQL')
const resolvers = require('../resolvers')

const productTypes = require('./product')
const userTypes = require('./user')
const storeTypes = require('./store')

const queryTypes =gql`
    type Query {
        products: [product]
        users:[user]
        stores:[store]
    }
`
const mutationTypes =gql`
    type Mutation {
        signup(input: signupInput): user 
        login(input: credentials): login
        createStore(input: createStoreInput): store 
        createProduct(input: ProductInput!): product 
    }
`

const allTypes = printGQL(
    queryTypes,
    mutationTypes,
    productTypes,
    userTypes,
    storeTypes
)

const schema = makeExecutableSchema({
    typeDefs: allTypes,
    resolvers
})

module.exports = () =>{
    return schema
}