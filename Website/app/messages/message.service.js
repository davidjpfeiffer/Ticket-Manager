(function() {
    'use strict';

    angular
        .module('app')
        .factory('messageService', messageService);

    messageService.$inject = ['$http', '$q', 'authenticationService'];

    function messageService($http, $q, authenticationService) {
        var service = {
            connectToChat: connectToChat,
            getConversation: getConversation,
            addNewMessage: addNewMessage,
            sendMessage: sendMessage,
            socket: null,
            allMessages: null
        };
        return service;

        function connectToChat(account) {
            if (service.socket === null) {
                service.socket = io.connect('http://localhost:3000');
                service.socket.emit('add account to chat', account);
                service.allMessages = {};
            }
        }

        function getConversation(senderId, recipientId) {
            if (recipientId in service.allMessages) {
                var deferred = $q.defer();
                deferred.resolve(service.allMessages[recipientId]);
                return deferred.promise;
            }
            else {
                return $http.get('http://localhost:2004/messages/' + senderId + '/' + recipientId)
                .then(function(response) {
                    service.allMessages[recipientId] = response.data;
                    return response.data;
                });
            }
        }

        function addNewMessage(message) {
            if (message.senderId in service.allMessages) {
                service.allMessages[message.senderId].push(message);
            }
            else {
                $http.get('http://localhost:2004/messages/' + message.recipientId + '/' + message.senderId)
                .then(function(response) {
                    service.allMessages[message.senderId] = response.data;
                    service.allMessages[message.senderId].push(message);
                });
            }
        }

        function sendMessage(message) {
            // Save message locally to keep allMessages up to date
            service.allMessages[message.recipientId].push(message);
            // Save message on node server
            service.socket.emit('private message', message);

            // Send Message to Database
            // IDEA: We could send the message to the database from the node server in batches
            return $http.post('http://localhost:2004/messages', message);
        }
    }
}());