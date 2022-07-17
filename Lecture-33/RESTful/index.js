const express = require('express');
const app = express();
const path = require('path');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

const comments = [
    {
        id: 0,
        user:'Soumen',
        text: 'Good Shoes!'
    },
    {
        id: 1,
        user:'Arun',
        text: 'Waste of Money! Dont buy it'
    },
    {
        id: 2,
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
    comments.push({ id: comments.length, user, text });
    res.redirect('/comments');
});


// Show one comment
app.get('/comments/:commentid', (req, res) => {
    const { commentid } = req.params;
    const comment = comments.find((comment) => comment.id === parseInt(commentid));
    res.render('show', { comment });
});


app.listen(3000,()=>{
  console.log('server started at port 3000');
});