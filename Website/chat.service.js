(function() {
    'use strict';

    angular
        .module('app')
        .factory('chatService', chatService);

    chatService.$inject = ['authenticationService'];

    function chatService(authenticationService) {
        var service = {
            connectToChat: connectToChat,
            socket: null
    };
    return service;

    function connectToChat(user) {
        if (service.socket === null) {
            service.socket = io.connect('http://localhost:3000');
            service.socket.emit('add user to chat', user);
        }
    }
}
}());