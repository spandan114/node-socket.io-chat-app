const chatform = document.getElementById('chat-form')
const chatmessages = document.querySelector('.chat-messages')
const roomName = document.getElementById('room-name');
const userName = document.getElementById('users');
//get url and name from url
const {username , room} = Qs.parse(location.search,{
    ignoreQueryPrefix:true
})
console.log(username,room)

const socket = io();

//join chat
socket.emit('joinroom',{username,room})

//get room and user
socket.on('roomUsers',({room,users}) => {
    outputRoomName(room)
    outputUserName(users)
})

//join left message
socket.on('message',message => {
    console.log(message);
    outputMessage(message)
    //scroll down
   chatmessages.scrollTop = chatmessages.scrollHeight;
})

//message submit
chatform.addEventListener('submit',e=>{
    e.preventDefault()

    //get text message
    const msg = e.target.elements.msg.value;
    //emmet message to server
    socket.emit('chatmessage',msg)
    //clear input
    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();
})

//output message
function outputMessage(message) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `
    <p class="meta">${message.username} <span>${message.time}</span></p>
						<p class="text">
							${message.text}
                        </p>
                        `
    document.querySelector('.chat-messages').appendChild(div)
}

//Add room name to dom

function outputRoomName(room){
roomName.innerText=room;
}
// Add users to DOM
function outputUserName(users) {
    userName.innerHTML = `
      ${users.map(user => `<li>${user.username}</li>`).join('')}
    `;
  }
  