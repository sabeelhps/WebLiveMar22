const mongoose = require('mongoose');

// Connecting to mongo database -> moviesDB
mongoose.connect('mongodb://localhost:27017/moviesDB')
    .then(() => console.log('CONNECTION OPEN!'))
    .catch((err) => console.log('ERR CONNECTING THE DB!!',err));

// Schema
const movieSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    year: Number,
    isWatched: Boolean
});

// Model ->technically its a js class
const Movie = mongoose.model('Movie', movieSchema);

const spiderman = new Movie({ name: 'Spiderman', year: 2010, rating: 9, isWatched: false });

// console.log(spiderman)


// This where we are actually saving the spiderman movie into the database
spiderman.save()
.then(()=>console.log('movie saved in db'))



