const express = require('express');
const app = express();
const session = require('express-session');


const sessionConfig = {
    secret: 'weneedsomebettersecret',
    resave: false,
    saveUninitialized: true,
}

app.use(session(sessionConfig));


app.get('/', (req, res) => {
    res.send('Home Route');
});

app.get('/setuser', (req, res) => {
    const { username } = req.query;
    req.session.username = username;
    res.send('STORED THE USERNAME INTO THE SESSION SUCCESSFULLY!');
});

app.get('/greet', (req, res) => {
    const { username } = req.session;
    res.send(`Hello from ${username}`);
});


app.get('/viewcount', (req, res) => {
    if (!req.session.viewcount) {
        req.session.viewcount = 1;
    } else {
        req.session.viewcount += 1;
    }
    res.send(`You viewed this page ${req.session.viewcount} times`);
});


app.listen(3000,()=>{
  console.log('server started at port 3000');
});