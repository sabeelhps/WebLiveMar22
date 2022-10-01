const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
    orderedItems: mongoose.Schema.Types.Array,
},{timestamps:true});


module.exports = mongoose.model('Order', orderSchema);