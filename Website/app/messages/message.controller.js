(function() {
    'use strict';

    angular
        .module('app')
        .controller('messageController', messageController);

    messageController.$inject = ['$scope', '$routeParams', 'authenticationService', 'messageService', 'accountService'];

    function messageController($scope, $routeParams, authenticationService, messageService, accountService) {
        var vm = this;
        vm.socket = {};
        vm.account = {};
        vm.recipient = null;
        vm.messages = [];
        vm.message = '';
        vm.sendMessage = sendMessage;

        activate();

        function sendMessage() {
            var message = { recipientId: vm.recipient.id, senderId: vm.account.id, sender: vm.account.userName, content: vm.message };
            messageService.sendMessage(message);
            vm.message = '';
            scrollToBottom();
        }

        function scrollToBottom() {
            setTimeout(function() {
                var textarea = document.getElementById('messageBox');
                textarea.scrollTop = textarea.scrollHeight;
            }, 0);
        }

        function activate() {
            // Get This Users Socket
            vm.socket = messageService.socket;

            // Get This Users Account
            vm.account = authenticationService.getAuthenticatedAccount();
            vm.account.userName = vm.account.firstName + ' ' + vm.account.lastName;
            delete vm.account.firstName;
            delete vm.account.lastName;

            // Get Recipients Account
            accountService.getAccount($routeParams.recipientId)
            .then(function(account) {
                vm.recipient = account;
                vm.recipient.userName = vm.recipient.firstName + ' ' + vm.recipient.lastName;
                delete vm.recipient.firstName;
                delete vm.recipient.lastName;
            });

            // Get Messages In This Conversation
            messageService.getConversation(vm.account.id, $routeParams.recipientId)
            .then(function(messages) {
                vm.messages = messages;
                scrollToBottom();
            });

            vm.socket.on('private message', function(message) {
                scrollToBottom();
            });
        }
    }
}());