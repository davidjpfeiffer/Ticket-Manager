(function() {
    'use strict';

    angular
        .module('app')
        .controller('chatController', chatController);

    chatController.$inject = ['$scope', 'authenticationService', 'chatService', 'userService'];

    function chatController($scope, authenticationService, chatService, userService) {
        var vm = this;
        vm.mySocket = {};
        vm.userAccount = {};
        vm.userMessage = '';
        vm.recipient = {};
        vm.businessRoom = '';
        vm.allMessages = {};
        vm.currentMessages = [];
        vm.sendMessage = sendMessage;
        vm.updateChatSettings = updateChatSettings;
        vm.onlineUsers = {};
        vm.allUsers = [];

        activate();

        function sendMessage() {
            if (vm.recipient != null) {
                vm.mySocket.emit('private message', { recipient: vm.recipient, content: vm.userMessage });
                if (!vm.allMessages[vm.recipient.id]) {
                    vm.allMessages[vm.recipient.id] = [];
                }
                vm.allMessages[vm.recipient.id].push({ sender: vm.userAccount, recipient: vm.recipient, content: vm.userMessage });
                updateChatSettings();
                vm.userMessage = '';

                console.log(vm.currentMessages);
            }
        }

        function updateChatSettings() {
            vm.currentMessages = [];
            if (vm.allMessages[vm.recipient.id]) {
                vm.allMessages[vm.recipient.id].forEach(addToCurrentMessages);
            }
        }

        function addToCurrentMessages(message) {
            vm.currentMessages.push(message);
        }

        function activate() {
            var authAccount = authenticationService.getAuthenticatedAccount();
            vm.userAccount.userName = authAccount.firstName + ' ' + authAccount.lastName;
            vm.userAccount.id = authAccount.id;
            vm.userAccount.businessId = authAccount.businessId;
            vm.businessRoom = 'business' + vm.userAccount.businessId;
            vm.mySocket = chatService.socket;
            userService.getUsers()
            .then(function(response) {
                response.forEach(createNewUsers);
                vm.recipient = vm.allUsers[0];
            });

            vm.mySocket.emit('join room', vm.businessRoom);

            vm.mySocket.on('group message', function(message) {
                vm.currentMessages.push({ sender: message.sender, content: message.content });
                $scope.$apply();
            });

            vm.mySocket.on('private message', function(message) {
                vm.allUsers.forEach(updateCurrentRecipient);

                function updateCurrentRecipient(user) {
                    if (user.id === message.sender.id) {
                        vm.recipient = user;
                    }
                }

                //vm.recipient = message.sender;
                if (!vm.allMessages[vm.recipient.id]) {
                    vm.allMessages[vm.recipient.id] = [];
                }

                vm.allMessages[vm.recipient.id].push({ sender: message.sender, recipient: vm.userAccount.id, content: message.content });
                updateChatSettings();
                $scope.$apply();
            });

            vm.mySocket.on('update online users', function(userBase) {
                vm.onlineUsers = userBase;
                $scope.$apply();
            });
        }

        function createNewUsers(user) {
            vm.allUsers.push({ userName: user.firstName + ' ' + user.lastName, id: user.id, businessId: user.businessId });
        };
    }
}());