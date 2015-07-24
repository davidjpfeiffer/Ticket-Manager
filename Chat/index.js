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
            console.log(socket.userName + ' logged out.');
            delete userBase[socket.userId];
            socket.emit('update online users', userBase);
        }
    });

    socket.on('private message', function(message) {
        var account = userBase[message.recipientId]
        if (account) {
            io.sockets.connected[account.socketId].emit('private message', message);
        }
        else {
            // Send offline message to database
        }
    });

    socket.on('add account to chat', function(account) {
        account.userName = account.firstName + ' ' + account.lastName;
        account.socketId = socket.id;
        delete account.firstName;
        delete account.lastName;
        userBase[account.id] = { socketId: socket.id, userName: account.firstName + ' ' + account.lastName };
        socket.userName = account.userName;
        socket.userId = account.id;
        console.log(socket.userName + ' logged in.');
        socket.emit('update online users', userBase);
    });
});