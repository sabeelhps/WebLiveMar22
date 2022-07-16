const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const todos = [
    "Go to Gym",
    "Buy Vegetable",
    "Learn Web",
    "Learn Express"
]



app.get('/', (req, res) => {
    res.render('index');
});


app.get('/todos', (req, res) => {
    res.render('todos',{todos});
});



app.listen(3000,()=>{
  console.log('server started at port 3000');
});