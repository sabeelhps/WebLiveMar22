const express = require('express');
const router = express.Router();
const Review = require('../models/Review');
const Product = require('../models/Product');
const { isLoggedIn } = require('../middleware');


router.post('/products/:productid/review',isLoggedIn, async(req, res) => {
    try {
        const { productid } = req.params;
        const { rating, comment } = req.body;
        const { username } = req.user; 
    
        // find the product with the given product id
        const product = await Product.findById(productid);
    
        // create a review inside reviews collection using Review model
    
        const review = await Review.create({ rating, comment, author: username });
    
        // push the reference of created review inside product.reviews array
        product.reviews.push(review);
    
        await product.save();
        
        req.flash('success', 'Created your review successfully');
        res.redirect(`/products/${productid}`);
    }
    catch (e) {
        req.flash('error', 'Something went wrong');
        res.redirect(`/products/${req.params.productid}`);
    }
});


module.exports = router;