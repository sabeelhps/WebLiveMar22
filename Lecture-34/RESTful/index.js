const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

let comments = [
    {
        id: uuid(),
        user:'Soumen',
        text: 'Good Shoes!'
    },
    {
        id: uuid(),
        user:'Arun',
        text: 'Waste of Money! Dont buy it'
    },
    {
        id: uuid(),
        user:'Manish',
        text: 'Best headphones go for it!'
    }
];


// List all the comments
app.get('/comments', (req, res) => {
    res.render('index', { comments });
});

// Display the form to create new comment
app.get('/comments/new', (req, res) => {
    res.render('new');
});

// Create new comment
app.post('/comments', (req, res) => {
    const { user, text } = req.body;
    comments.push({ id: uuid(), user, text });
    res.redirect('/comments');
});


// Show one comment
app.get('/comments/:commentid', (req, res) => {
    const { commentid } = req.params;
    const comment = comments.find((comment) => comment.id === commentid);
    res.render('show', { comment });
});

// Get edit form prefilled with the data
app.get('/comments/:commentid/edit', (req, res) => {
    const { commentid } = req.params;
    const comment = comments.find((comment) => comment.id === commentid);
    res.render('edit', { comment });
});

// Update the commnet with given commentid
app.patch('/comments/:commentid', (req, res) => {
    const { commentid } = req.params;
    const comment = comments.find((comment) => comment.id === commentid);
    comment.user = req.body.user;
    comment.text = req.body.text;
    // console.log(req.body);
    res.redirect('/comments');
});

// Delete a comment
app.delete('/comments/:commentid', (req, res) => {
    const { commentid } = req.params;
    comments = comments.filter((comment) => comment.id !== commentid);
    res.redirect('/comments');
});


app.listen(3000,()=>{
  console.log('server started at port 3000');
});