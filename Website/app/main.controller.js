(function() {
    'use strict';

    angular
        .module('app')
        .controller('mainController', mainController);

    mainController.$inject = ['$rootScope', 'authenticationService', 'messageService', 'toastr'];

    function mainController($rootScope, authenticationService, messageService, toastr) {
        var main = this;
        // Account
        main.account = {};
        main.logout = authenticationService.logout;
        main.mySocket = {};

        // Navigation
        main.toggleNav = toggleNav;
        main.displayNav = false;

        activate();

        function activate() {
            main.account = authenticationService.getAuthenticatedAccount();
            messageService.connectToChat(main.account);
            main.mySocket = messageService.socket;
            main.mySocket.on('private message', function(message) {
                messageService.addNewMessage(message);
                toastr.info('From ' + message.sender, 'New Message');
            });

            $rootScope.$on("$locationChangeStart", function() {
                main.displayNav = false;
            });
        };

        function toggleNav() {
            main.displayNav = !main.displayNav;
        }
    }
}());