const express = require('express');
const app = express();


// app.use((req, res, next) => {
//     res.send('HIJACKED BY MY APP.USE!!!');
// });


app.use((req, res, next) => {
    console.log('MY FIRST MIDDLEWARE');
    return next();
    console.log('INSIDE FIRST MIDDLEWARE AFTER CALLING next()');
});

app.use((req, res, next) => {
    console.log('MY SECOND MIDDLEWARE!');
    next();
});

app.use((req, res, next) => {
    console.log('MY THIRD MIDDLEWARE');
    req.username = 'sabeel';
    next();
});

app.get('/', (req, res) => {
    const { username } = req;
    res.send(`Hey there ${username}`);
});

app.get('/cat', (req, res) => {
    res.send('MEEOUUWW');
});

const verify = (req, res, next) => {
    const { password } = req.query;
    if (password === 'apple') {
        return next();
    }
    res.send('Invalid Password');
}


app.get('/secret',verify,(req, res) => {
    res.send('Sometime i wear headphone in public so i dont have to talk to anyone!');
});


app.listen(3000,()=>{
  console.log('server started at port 3000');
});