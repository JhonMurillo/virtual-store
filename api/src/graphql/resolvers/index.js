const product = require('./product')
const user = require('./user')
const store = require('./store')


module.exports = {
    Query: {
        ...product.Query,
        ...user.Query,
        ...store.Query
    },
    Mutation: {
        ...product.Mutation,
        ...user.Mutation,
        ...store.Mutation
    }
}