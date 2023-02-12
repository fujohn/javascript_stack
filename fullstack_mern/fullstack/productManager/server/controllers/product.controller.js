const Product = require('../models/product.model');    /* this is new */

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

          /* The method below is new */
module.exports.createProduct = (request, response) => {
    // Mongoose's "create" method is run using our Product model to add a new product to our db's product collection.
    Product.create(request.body) //This will use whatever the body of the client's request sends over
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

