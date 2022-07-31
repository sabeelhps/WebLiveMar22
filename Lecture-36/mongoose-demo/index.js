const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/moviesDB')
    .then(() => console.log("CONNECTION OPEN!!!"))
    .catch((err) => console.log(err));




const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength:25
    },
    rating: {
        type: Number,
        min: 1,
        max:[10,'Rating should not be greater than 10'],
        required:[true,'Cannot be saved, Since rating is not available']
    },
    year: {
        type: Number,
        min: 1990,
        
    },
    isWatched: {
        type: Boolean,
        default:false
    },
    directorName: {
        firstName: String,
        lastName:String
    }
});

// Technicaly its a JS Class
const Movie = mongoose.model('Movie', movieSchema);


// const spiderman = new Movie({ name: 'Spiderman', year: 2010, rating: 8, isWatched: true });

// console.log(spiderman);


// Now this object of Movie Model(class) is saved in the db(moviesDB)
// spiderman.save()
//     .then(() => console.log('movie saved'));






