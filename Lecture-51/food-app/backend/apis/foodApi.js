const express = require('express');
const router = express.Router();
const Food = require('../models/Food');
const Order = require('../models/Order');

router.get('/allfoods', async (req, res) => {
    try {
        const foods = await Food.find({});
        res.status(200).json(foods);
    }
    catch (e) {
        res.status(500).json({ message: 'something went while fetching the foods' });
    }
});


router.post('/placeOrder', async (req, res) => {
    try {
        const { cart } = req.body;
        await Order.create({ orderedItems: cart });
        res.status(200).json({ message: 'Placed Your Order Successfully' });
    }
    catch (err) {
        res.status(500).json({ message: 'something went while fetching the foods' });
    }
})


module.exports = router;

