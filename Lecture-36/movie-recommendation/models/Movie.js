const mongoose = require('mongoose');


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

module.exports = Movie;