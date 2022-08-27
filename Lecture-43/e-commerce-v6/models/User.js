const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


const userSchema = new mongoose.Schema({
    // username: String, --> This is automatically added by passport-local-mongoose, no need to add ourselve
    // password: String, --> This is automatically added by passport-local-mongoose
    email: String,
    cart: [
        {   
            _id:{id:false},
            name: String,
            price: Number,
            img: String,
            id: mongoose.Schema.Types.ObjectId,
            count: {
                type: Number,
                default: 1,
                min: [0, 'Quantity Cannot be less than 1']
            }
        }
    ],
    userType: {
        type: String,
        enum: ['consumer', 'retailer'],
        default:'consumer'
    }
});


userSchema.plugin(passportLocalMongoose);


const User = mongoose.model('User', userSchema);

module.exports = User;