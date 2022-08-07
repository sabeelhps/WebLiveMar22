const express = require('express');
const router = express.Router();
const Review = require('../models/Review');
const Product = require('../models/Product');


router.post('/products/:productid/review', async(req, res) => {
    const { productid } = req.params;
    const { rating, comment } = req.body;

    // find the product with the given product id
    const product = await Product.findById(productid);

    // create a review inside reviews collection using Review model

    const review = await Review.create({ rating, comment });

    // push the reference of created review inside product.reviews array
    product.reviews.push(review);

    await product.save();

    res.redirect(`/products/${productid}`);
});


module.exports = router;