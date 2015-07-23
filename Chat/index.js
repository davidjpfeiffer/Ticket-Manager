var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
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

    socket.on('private message', function(message) {
        var user = userBase[message.recipientId]
        if (user) {
            io.sockets.connected[user.socketId].emit('private message', message);
        }
        else {
            console.log('Message Sent Offline');
        }
        console.log('User ' + message.senderId + ' to User ' + message.recipientId + ': ' + message.content);
    });

    socket.on('add user to chat', function(account) {
        account.userName = account.firstName + ' ' + account.lastName;
        account.socketId = socket.id;
        delete account.firstName;
        delete account.lastName;
        userBase[account.id] = { socketId: socket.id, userName: account.firstName + ' ' + account.lastName };
        socket.userName = account.userName;
        socket.userId = account.id;
        console.log(socket.userName + ' has connected to the chat.');
        socket.emit('update online users', userBase);
    });
});