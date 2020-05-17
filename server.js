const express = require("express");
const http = require('http');
const path = require('path')
const socketio = require('socket.io')
const formtmessage = require('./utils/messages');
const {userJoin,getCurrentUser,userLeave,getRoomUsers} = require('./utils/user')

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.json());


//set static folder
app.use(express.static(path.join(__dirname,'public')))

const boatname = "admin";

//run whene client connect
io.on('connection',socket => {

    socket.on('joinroom',({username,room})=>{

        const user = userJoin(socket.id,username,room)
        socket.join(user.room)

    //welcome current user
    socket.emit('message',formtmessage(boatname, `${user.username} welcome to chatCord!`));
    //when a user connects
    socket.broadcast.to(user.room).emit('message',formtmessage(boatname,`${user.username} join the chat`));
    //send user and room info
    io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room)
      });

    })
       

    //listen chat message
    socket.on('chatmessage',(msg)=>{
        const user = getCurrentUser(socket.id)
        io.to(user.room).emit('message',formtmessage(user.username,msg))
    })


      // Runs when client disconnects
  socket.on('disconnect', () => {
    const user = userLeave(socket.id);

    if (user) {
      io.to(user.room).emit('message',formtmessage(boatname, `${user.username} has left the chat`));

      // Send users and room info
      io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room)
      });
    }
  });

});

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`Server running on port port ${port}`));



