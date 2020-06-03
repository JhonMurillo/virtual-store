const StoreModel = require('../../models/Store')

module.exports = {
    Query: {
        stores: async (parent, args, context, info ) => {
            const stores = await StoreModel.find({});
            return stores
        }
    },
    Mutation: {
        createStore: async (parent, { input }, context, info) => {
            const store = await StoreModel.create(input);
            return store
        }
    }
}