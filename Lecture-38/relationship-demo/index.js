const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/relationshipDB')
    .then(() => console.log('DB CONNECTED'));

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    address: [
        {
            _id: {id:false},
            city: String,
            country: String,
        }
    ]
});

const User = mongoose.model('User', userSchema);


async function addUser() {
    const vivek = await User.create({ name: 'Vivek', age: 20 });
    console.log(vivek);
    console.log('user created');
}

// addUser();

async function addAddresses() {
    const user = await User.findById('62ee828e40c2100671dae2fe');
    user.address.push({ city: 'Banglore', country: 'India' });
    await user.save();
    console.log('saved');
}

addAddresses();


