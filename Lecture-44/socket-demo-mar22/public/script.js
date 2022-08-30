const socket = io();

const chatInp = document.getElementById('chat-inp');
const chatBtn = document.getElementById('chat-btn');
const chatList = document.getElementById('chat-list');
const loginSection = document.getElementById('login-section')
const chatSection = document.getElementById('chat-section')
const loginBtn = document.getElementById('login-btn');
const loginInp = document.getElementById('login-inp');

chatSection.classList.add('hide');


loginBtn.addEventListener('click', () => {
    const username = loginInp.value;
    socket.emit('login', {
        username: username
    });
    loginSection.classList.add('hide');
    chatSection.classList.remove('hide');
})

chatBtn.addEventListener('click', () => {
    const inputText = chatInp.value;  
    socket.emit('send-msg', { msg: inputText });
    chatInp.value = "";
});


socket.on('received-msg', (data) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'list-group-item mb-2 rounded-pill');
    li.innerText = `${data.username} : ${data.msg}`;
    chatList.append(li);
})

