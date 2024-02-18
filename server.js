
// How to make a live chat app learned here: https://www.youtube.com/watch?v=rxzOqP9YwmM
const io =  require('socket.io')(3000)

io.on(('connection'), socket => {
    socket.emit('chat-message', 'Hello World')
})