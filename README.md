# node-socket.io-chat-app


<p align="center">
  <img src="https://img.icons8.com/cute-clipart/64/000000/chat.png" width="100" height="100"/>
</p>

[![Forks][forks-shield]][forks-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<hr>

<img src="./images/Screenshot (83).png" />

<img src="./images/Screenshot (84).png" />

### How To Use
+ Clone this repo to your computer
+ "npm install" to install necessary modules 
+ "npm start" to start the app 

<hr>

## Notes :-
```
// To connect socket.io server
const io = socketio(server);

io.on('connection',socket => {

// sending to the client
  socket.emit('hello', 'can you hear me?', 1, 2, 'abc');

  // sending to all clients except sender
  socket.broadcast.emit('broadcast', 'hello friends!');

  // sending to all clients in 'game' room except sender
  socket.to('game').emit('nice game', "let's play a game");

  // sending to all clients in 'game1' and/or in 'game2' room, except sender
  socket.to('game1').to('game2').emit('nice game', "let's play a game (too)");

  // sending to all clients in 'game' room, including sender
  io.in('game').emit('big-announcement', 'the game will start soon');

  // sending to all clients in namespace 'myNamespace', including sender
  io.of('myNamespace').emit('bigger-announcement', 'the tournament will start soon');

  // sending to a specific room in a specific namespace, including sender
  io.of('myNamespace').to('room').emit('event', 'message');

  // sending to individual socketid (private message)
  io.to(socketId).emit('hey', 'I just met you');

// sending with acknowledgement
  socket.emit('question', 'do you think so?', function (answer) {});

  // sending without compression
  socket.compress(false).emit('uncompressed', "that's rough");

  // sending a message that might be dropped if the client is not ready to receive messages
  socket.volatile.emit('maybe', 'do you really need it?');

  // specifying whether the data to send has binary data
  socket.binary(false).emit('what', 'I have no binaries!');

  // sending to all clients on this node (when using multiple nodes)
  io.local.emit('hi', 'my lovely babies');

  // sending to all connected clients
  io.emit('an event sent to all connected clients');

})

```
<h3>Contact Me:</h3>

<div>
    <p><b>Portfolio:</b> https://spandan114.github.io/spandanjoshi-portfolio/ </p>
</div>

<div>
    <p><b>Gmail:</b> spandanj685@gmail.com </p>
</div>

<div>
    <p><b>GitHub:</b> https://github.com/spandan114</p>
</div>












[forks-shield]: https://img.shields.io/github/forks/kaboobear/MEVN-Fitness-App?style=flat-square
[forks-url]: https://github.com/kaboobear/MEVN-Fitness-App/network/members
[issues-shield]: https://img.shields.io/github/issues/kaboobear/MEVN-Fitness-App.svg?style=flat-square
[issues-url]: https://github.com/kaboobear/MEVN-Fitness-App/issues
[license-shield]: https://img.shields.io/github/license/kaboobear/MEVN-Fitness-App.svg?style=flat-square
[license-url]: https://github.com/kaboobear/MEVN-Fitness-App/blob/master/LICENSE.txt
