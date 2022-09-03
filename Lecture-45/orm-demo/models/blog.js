const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const Blog = sequelize.define('blogs', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull:false
    },
    img: {
        type: DataTypes.STRING,
    },
    blogText: {
        type: DataTypes.TEXT,
        allowNull: false
    }
  }, {
    timestamps:true
});
  
Blog.sync()
    .then(() => console.log('blogs table created successfully'))
    .catch((err)=>console.log('cannot create the blogs table at the moment!'));


module.exports = Blog;