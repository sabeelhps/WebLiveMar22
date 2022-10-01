const express = require('express');
const app = express();
const mongoose = require('mongoose');
const foodApi = require('./apis/foodApi');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/food-app-mar22')
    .then(() => console.log('db connected'))
    .catch((err) => console.log(err));

//Middlewares 
app.use(cors());
app.use(express.json());

// All apis
app.use(foodApi);


app.listen(8000,()=>{
  console.log('server started at port 8000');
});