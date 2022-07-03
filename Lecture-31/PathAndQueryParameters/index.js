const express = require('express');
const app = express();

app.get('/r/:subredit', (req, res) => {
    const { subredit } = req.params;
    // Database logic

    res.send(`You are watching ${subredit} subredit`);
});


app.get('/user/:username', (req, res) => {
    const { username } = req.params;
    res.send(`You are viewing ${username}'s profile`)
});

app.get('/post/:postId/comments/:commentId', (req, res) => {
    const {postId,commentId}  = req.params;
    res.send(`You are commenting on post ${postId} with commentid as ${commentId}`);
})


app.get('/search', (req, res) => {
    // console.log(req.query);
    const { q } = req.query;
    res.send(`You are searching for ${q}`);
});


app.get('/hello', (req, res) => {
    res.send('Hello from the server')
})


app.listen(8000, () => {
    console.log('server running at port 8000');
})