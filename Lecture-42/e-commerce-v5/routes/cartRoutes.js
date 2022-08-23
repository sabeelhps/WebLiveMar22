const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware');
const User = require('../models/User');
const Product = require('../models/Product');

router.get('/products/user/cart', isLoggedIn ,async (req, res) => {
    try {
        const cart = req.user.cart;
        const totalAmount = cart.reduce((sum, item) => sum + item.price * item.count, 0);
        res.render('cart/cartPage', { cart,totalAmount });
    }
    catch (e) {
        req.flash('error', 'Something went wrong');
        res.redirect('/products');
    }
})

router.post('/products/:productid/cart',isLoggedIn, async(req, res) => {
    try {
        const { productid } = req.params;
        const userid = req.user._id;
        const user = await User.findById(userid);

        // checks if product is already present
        const isPresent = user.cart.some((item) => item.id.equals(productid));

        // if present then we will only update the count
        // otherwise we will add a new product altogther

        if (isPresent) {
            const updateCart = user.cart.map((item) => item.id.equals(productid) ? { ...item, count: item.count + 1 } : item);
            user.cart = updateCart;
        } else {
            const product = await Product.findById(productid);

            user.cart.push({
                name: product.name,
                price: product.price,
                img: product.img,
                id: product._id
            });
        }
        await user.save();
        
        res.redirect("/products/user/cart");
    }
    catch (e) {
        req.flash('error', 'Cannot add the product to the cart at the moment');
        res.redirect('/products');
    }
});

module.exports = router;