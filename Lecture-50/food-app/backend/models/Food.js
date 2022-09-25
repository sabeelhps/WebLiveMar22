const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        min: 0
    },
    desc: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Food', foodSchema);