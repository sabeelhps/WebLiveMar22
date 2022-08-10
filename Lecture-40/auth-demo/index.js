const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const User = require('./models/user');
const bcrypt = require('bcrypt');
const session = require('express-session');


mongoose.connect('mongodb://localhost:27017/auth-demo-live-mar-22')
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log(err));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}));

const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.send('You need to login first');
    }
    next();
}


app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/register', (req, res) => {
    res.render('signup');
});


app.post('/register', async(req, res) => {
    const { username, password } = req.body;

    if (password.trim().length < 4) {
        return res.send('Password length should be greater than 3');
    }

    const foundUser = await User.findOne({ username });

    if (foundUser) {
        return res.send('User with this username is already registered');
    }

    
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);
    
    await User.create({ username, hash });
    res.redirect('/login');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async(req, res) => {
    const { username, password } = req.body;

    // check the user with given username
    const foundUser = await User.findOne({ username });
    
    if (!foundUser) {
        return res.send("User with this username doesn't exists");
    }

    // validating the incoming password with the already stored hash
    const validUser = await bcrypt.compare(password, foundUser.hash);

    if (!validUser) {
        return res.send('Incorrect Password');
    }

    // storing the user information (id) inside the session for persistent login
    req.session.user_id = foundUser._id;

    res.redirect('/secret');
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    console.log('Logged out successfully');
    res.redirect('/login');
});


app.get('/secret',requireLogin, (req, res) => {
    res.send('THIS IS MY TOP SECRET!');
});

app.listen(3000,()=>{
  console.log('server started at port 3000');
});