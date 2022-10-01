const express = require('express');
const router = express.Router();
const Food = require('../models/Food');

router.get('/allfoods', async (req, res) => {
    try {
        const foods = await Food.find({});
        res.status(200).json(foods);
    }
    catch (e) {
        res.status(500).json({ message: 'something went while fetching the foods' });
    }
});


module.exports = router;

