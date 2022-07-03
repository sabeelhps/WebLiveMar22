const express = require('express');
const app = express();


// app.use((req,res) => {
//     // console.log("INSIDE MY APP.USE!");
//     // console.log(req);
//     // console.log(res);
//     // res.send('Hello from the server');
//     res.status(200).send('<h1>Hello From Express!</h1>');
// });


app.get('/', (req, res) => {
    res.send("HOME ROUTE!");
});

app.get('/cat', (req, res) => {
    res.send('MEEOOWWW!');
});

app.get('/dog', (req, res) => {
    res.send('Woof Woof!!');
});

app.get('*', (req, res) => {
    res.send('You are requesting a wrong url');
})

app.listen(8000, () => {
    console.log('server listening at port 8000...'); 
});














