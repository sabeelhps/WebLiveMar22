const express = require('express');
const app = express();
const mongoose = require('mongoose');
const foodApi = require('./apis/foodApi');

mongoose.connect('mongodb://localhost:27017/food-app-mar22')
    .then(() => console.log('db connected'))
    .catch((err) => console.log(err));


app.use(foodApi);





app.listen(3000,()=>{
  console.log('server started at port 3000');
});