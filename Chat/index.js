var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var rooms = [];
var userBase = {};

http.listen(3000, function() {
    console.log('Chat Server Online');
}); 

io.on('connection', function(socket) {

    socket.on('disconnect', function() {
        if (socket.userId in userBase) {
            console.log(socket.userName + ' has disconnected from the chat.');
            delete userBase[socket.userId];
            socket.emit('update online users', userBase);
        }
    });

    socket.on('group message', function(message) {
        io.sockets.in(message.room).emit('group message', { sender: { userName: socket.userName, id: socket.userId }, message: content.content });
        console.log('[ ' + message.room + ' ] ' + socket.userName + ': ' + message.content);
    });

    socket.on('private message', function(message) {
        var user = userBase[message.recipient.id]
        if (user) {
            io.sockets.connected[user.socketId].emit('private message', { sender: { userName: socket.userName, id: socket.userId }, content: message.content });
        }
        else {
            // Send offline private message
            console.log('Message Sent Offline');
        }
        console.log(socket.userName + ' to ' + message.recipient.userName + ': ' + message.content);
    });

    socket.on('add user to chat', function(account) {
        if (account.accountType === 'user') {
            userBase[account.id] = { socketId: socket.id, userName: account.firstName + ' ' + account.lastName };
            socket.userName = account.firstName + ' ' + account.lastName;
            socket.userId = account.id;
            console.log(socket.userName + ' has connected to the chat.');
            socket.emit('update online users', userBase);
        }
    });

    socket.on('join room', function(room) {
        if (rooms.indexOf(room) == -1) {
            rooms.push(room);
        }
        console.log(socket.userName + ' joined room ' + room);
        socket.join(room);
    });

    socket.on('leave room', function(room) {
        console.log(socket.userName + ' left room ' + room);
        socket.leave(room);
    });
});