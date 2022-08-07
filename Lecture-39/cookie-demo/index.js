const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');


app.use(cookieParser('weneedabettersecret'));


app.get('/', (req, res) => {
    // console.log(req.cookies);
    res.send(req.signedCookies);
});

app.get('/greet', (req, res) => {
    console.log(req.cookies);
    res.send('Hello!');
})

app.get('/setcookie', (req, res) => {
    
    res.cookie('mode', 'dark');
    res.cookie('username', 'sabeel');
    res.cookie('location', 'delhi', {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    });
    
    res.send('SENT YOU A COOKIE SUCCESSFULLY!');
});


app.get('/signedcookie', (req, res) => {
    res.cookie('fruit', 'apple', { signed: true });
    res.send('SENT U A SIGNED COOKIE');
});


app.listen(3000,()=>{
  console.log('server started at port 3000');
});