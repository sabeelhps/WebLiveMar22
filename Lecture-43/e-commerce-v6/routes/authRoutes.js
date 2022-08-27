const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');



// Get register page
router.get('/register', (req, res) => {
    res.render('auth/signup');
});

// router.get('/fakeUser', async (req, res) => {
//     const user = new User({ username: 'max', email: 'max@gmail.com' });
//     const newUser = await User.register(user, '12345');
//     res.send(newUser);
// });


// Register new user
router.post('/register', async(req, res) => {
    try{
        const { username, password, email,userType } = req.body;
        const user = new User({ username, email, userType });
        await User.register(user, password);
        req.flash('success', 'Registered Successfully');
        res.redirect('/login');
    }
    catch (e) {
        req.flash('error', e.message);
        res.redirect('/register');
    }
});

router.get('/login', (req, res) => {
    res.render('auth/login');
});


// Login user into the session
router.post('/login',
    passport.authenticate('local',
        { 
            failureRedirect: '/login',
            failureMessage: true,
            failureFlash: true 
        }),
  function(req, res) {
    req.flash('success',`Welcome back again ${req.user.username}`)
    res.redirect('/products');
});


router.get('/logout', (req, res) => {
    try {
        req.logout((err)=> {
            if (err) { return next(err); }
            req.flash('success', 'GoodBye!');
            res.redirect('/login');
        });
    }
    catch (e) {
        req.flash('error', 'something went wrong');
        res.redirect('/products');
    }
})

module.exports = router;