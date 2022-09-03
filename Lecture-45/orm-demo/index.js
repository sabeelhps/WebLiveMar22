const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const { connectDB } = require('./db');
const Blog = require('./models/blog');
const methodOverride = require('method-override');

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// connect to mysql database
connectDB();

app.get('/', (req, res) => {
    res.send("Home route")
})


app.get('/blogs', async (req, res) => {
    const blogs = await Blog.findAll();
    res.render('blogs/index',{blogs});
});

app.get('/blogs/new', (req, res) => {
    res.render('blogs/new');
});

app.post('/blogs', async (req, res) => {
    const { author, title, img, blogText } = req.body;
    await Blog.create({ author, title, img, blogText });
    res.redirect('/blogs');
});

app.get('/blogs/:blogid', async (req, res) => {
    const { blogid } = req.params;
    const blog = await Blog.findByPk(blogid);
    res.render('blogs/show', { blog });
});

app.get('/blogs/:blogid/edit', async (req, res) => {
    const { blogid } = req.params;
    const blog = await Blog.findByPk(blogid);
    res.render('blogs/edit', { blog });
});

app.patch('/blogs/:blogid', async (req, res) => {
    const { blogid } = req.params;
    const { title, img, blogText } = req.body;
    await Blog.update({ title, img, blogText }, {
        where: {
            id: blogid
        }
    });

    res.redirect(`/blogs/${blogid}`);
});

app.delete('/blogs/:blogid', async(req, res) => {
    const { blogid } = req.params;
    await Blog.destroy({
        where: {
            id: blogid
        }
    });

    res.redirect('/blogs');
})


app.listen(3000,()=>{
  console.log('server started at port 3000');
});