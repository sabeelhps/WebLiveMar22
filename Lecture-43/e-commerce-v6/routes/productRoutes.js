const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { isLoggedIn,isRetailer,isProductAuthor } = require('../middleware');

// Get all the products
router.get('/products', async (req, res) => {
    const products = await Product.find({});
    res.render('products/index', { products });
});

// Get form to create new product
router.get('/products/new',isLoggedIn,isRetailer, (req, res) => {
    res.render('products/new');
});

// create a new product
router.post('/products',isLoggedIn,isRetailer, async (req, res) => {
    try {
        const { name, price, desc, img } = req.body;
        
        // Grab the current logged in user as author if this product
        const author = req.user._id;

        await Product.create({ name, price, desc, img, author});
        req.flash('success', 'Product created successfully');
        res.redirect('/products');
    }
    catch (e) {
        req.flash('error', 'Cannot create the product at the moment');
        res.redirect('/products/new');
    }
});

// show a product
router.get('/products/:productid', async (req, res) => {
    try {
        const { productid } = req.params;
        const product = await Product.findById(productid).populate('reviews');
        res.render('products/show', { product });
    }
    catch (e) {
        req.flash('error', 'something went wrong');
        res.redirect('/products');
    }
});

// get the edit form
router.get('/products/:productid/edit',isLoggedIn,isRetailer,isProductAuthor, async (req, res) => {
    try {
        const { productid } = req.params;
        const product = await Product.findById(productid);
        res.render('products/edit', { product });  
    }
    catch (e) {
        req.flash('error', 'something went wrong');
        res.redirect('/products');
    }
});

// update a product
router.patch('/products/:productid',isLoggedIn,isRetailer,isProductAuthor, async (req, res) => {
    try {
        const { productid } = req.params;
        const { name, price, desc, img } = req.body;
        await Product.findByIdAndUpdate(productid, { name, price, desc, img });
        req.flash('success', 'Updated the product successfully');
        res.redirect(`/products/${productid}`);
    }
    catch (e) {
        req.flash('error', 'something went wrong');
        res.redirect('/products');
    }
});

// Delete a product
router.delete('/products/:productid',isLoggedIn,isRetailer,isProductAuthor, async (req, res) => {
    try {
        const { productid } = req.params;
        await Product.findByIdAndDelete(productid);
        req.flash('success', 'Deleted the product successfully');
        res.redirect('/products');
    }
    catch (e) {
        req.flash('error', 'something went wrong');
        res.redirect('/products');
    }
});

module.exports = router;