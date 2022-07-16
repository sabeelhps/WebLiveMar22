const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs'); //configuring express to use ejs
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const todos = [
    "Cook Food",
    "Watch Movies",
    "Read Books",
    "Learn Express"
]



app.get('/hello', (req, res) => {
    res.render('index');
});


app.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    res.render('random', { favRandomNum: randomNumber });
});


app.get('/todos', (req, res) => {
    
    res.render('todos', { todos });
});

app.get('/r/:subredit', (req, res) => {
    const { subredit } = req.params;
    res.render('subredit', { subreditName : subredit})
})


app.listen(3000,()=>{
  console.log('server started at port 3000');
});