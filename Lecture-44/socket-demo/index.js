const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);



app.use('/', express.static(path.join(__dirname, 'public')));


io.on('connection', (socket) => {
    console.log(socket.id);
});





const port = 3000;
server.listen(port, () => {
    console.log(`Chatting Server Started at ${port} port`)
});