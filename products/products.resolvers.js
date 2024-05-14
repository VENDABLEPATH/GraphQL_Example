const productsModel = require('./products.model');

module.exports = {
    Query: {
        products: () => {
            return productsModel.getAllProducts()
        },
        productsByPrice: async (parent, args) => {
            return await productsModel.getProductsByPrice(args.minPrice, args.maxPrice)
        },
        productById: async (parent, args) => {
            return await productsModel.getProductById(args.id)
        }
    },
    Mutation: {
        addProductReview: async (parent, args) => {
            return await productsModel.addProductReview(args.rating, args.comment, args.id)
        },
        addNewProduct: async (parent, args) => {
            return await productsModel.addNewProduct(args.id, args.price, args.description)
        }
    }
}