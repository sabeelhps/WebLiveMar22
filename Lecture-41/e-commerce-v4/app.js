const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/User');




// Routes 
const productRoutes = require('./routes/productRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const authRoutes = require('./routes/authRoutes');


mongoose.connect('mongodb://localhost:27017/shopping-app-wb-lv-mar')
    .then(() => console.log("DB CONNECTED!"))
    .catch((err) => console.log(err));

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

const sessionConfig = {
  secret: 'weneedabettersecret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    // secure: true
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7 * 1,
    maxAge:1000 * 60 * 60 * 24 * 7 * 1
  }
}


app.use(session(sessionConfig));
app.use(passport.authenticate('session'));
app.use(flash());


passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  res.locals.currentUser = req.user;
  next();
});



app.use(productRoutes);
app.use(reviewRoutes);
app.use(authRoutes);


app.listen(3000,()=>{
  console.log('server started at port 3000');
});