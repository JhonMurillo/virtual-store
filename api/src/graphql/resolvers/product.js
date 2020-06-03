const ProductModel = require('../../models/Product')


module.exports = {
    Query: {
        products: async (parent, args, context, info ) => {
            const products = await ProductModel.find({});
            return products
        }
    },
    Mutation: {
        createProduct: async (parent, { input }, context, info) => {
            console.log(JSON.stringify(input))
            const product = await ProductModel.create(input);
            return product
        }
    }
}