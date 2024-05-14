const products = [
    {
        id: 'redshoe',
        description: 'Red Shoe',
        price: 49.99,
        reviews: []
    },
    {
        id: 'bluejean',
        description: 'Blue Jeans',
        price: 89.99,
        reviews: []
    }
]

function getProductsByPrice(min, max){
    return products.filter((product) => {
        return product.price >= min && product.price <= max
    });
};

function getProductById(id){
    return products.find((product) => {
        return product.id === id
    });
};

function getAllProducts(){
    return products
};

function addProductReview(rating, comment, id){

    const product = getProductById(id);

    if (!product){
        return undefined
    }
    const review = Object.create({
        rating: rating, 
        comment: comment,
        id: id
    });
    product.reviews.push(review);

    return review
};

function addNewProduct(id, price, description){
    const product = Object.create({
        id: id,
        price: price,
        description: description,
        reviews: []
    });
    products.push(product);
    return product
};

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductById,
    addProductReview,
    addNewProduct
};