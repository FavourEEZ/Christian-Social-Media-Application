const express = require("express");
const app = express() // const app = require('express')();
const http = require("http").createServer(app) //Creates a server for us to us with Socket.io
const io = require("socket.io")(http) //Create a sever then passes that to socket.io

const { v4: uuidV4 } = require('uuid') //renaming v4 function to uuidV4

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render("homepage");
})

app.get('/video', (req, res) => {
    res.redirect(`/video/${uuidV4()}`)
})

app.get('/video/:room', (req, res) => { //Dynamic parameter which get passed unto the URL
    res.render('room', { roomId: req.params.room}) //Getting room from room parameter (the unique room url)
})

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat-message', (msg) => {
        console.log("message", msg)
        io.emit('chat message', msg); //Sending the messgae to everyone including the sender
    });
})

http.listen(3000, () => {
    console.log('listening on port 3000'); //make http server listen of port 3000
});