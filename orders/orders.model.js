const orders = [
    {
        date: '2005-05-05',
        subtotal: 139.98,
        items: [
            {
                product: {
                    id: 'redshoe',
                    description: 'Old Red Shoe',
                    price: 49.99
                },
                quantity: 1
            },
            {
                product: {
                    id: 'bluejean',
                    description: 'Old Blue Jeans',
                    price: 89.99
                },
                quantity: 1
            }
        ]
    }
]

function getAllOrders(){
    return orders
};

module.exports = {
    getAllOrders
}