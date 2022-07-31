const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Movie = require('./models/Movie');

// connecting to the mongo database
mongoose.connect('mongodb://localhost:27017/moviesDB')
    .then(() => console.log("CONNECTION OPEN!!!"))
    .catch((err) => console.log(err));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('index');
});


app.get('/search', async(req, res) => {
    const { q } = req.query;
    const movies = await Movie.find({ name: { $regex: `^${q}` } });
    res.status(200).json(movies);
});

app.listen(3000,()=>{
  console.log('server started at port 3000');
});