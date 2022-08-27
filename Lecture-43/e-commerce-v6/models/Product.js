const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    img: String,
    desc: String,
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }
    ],
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
});

const Product = mongoose.model('Product', productSchema);


module.exports = Product;