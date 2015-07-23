(function() {
    'use strict';

    angular
        .module('app')
        .controller('mainController', mainController);

    mainController.$inject = ['authenticationService', 'messageService', 'toastr'];

    function mainController(authenticationService, messageService, toastr) {
        var main = this;
        main.account = {};
        main.logout = authenticationService.logout;
        main.mySocket = {};

        activate();

        function activate() {
            main.account = authenticationService.getAuthenticatedAccount();
            messageService.connectToChat(main.account);
            main.mySocket = messageService.socket;
            main.mySocket.on('private message', function(message) {
                messageService.addNewMessage(message);
                toastr.success('From ' + message.sender, 'New Message');
            });
        };
    }
}());