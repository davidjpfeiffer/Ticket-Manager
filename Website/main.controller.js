(function() {
    'use strict';

    angular
        .module('app')
        .controller('mainController', mainController);

    mainController.$inject = ['authenticationService', 'chatService'];

    function mainController(authenticationService, chatService) {
        var main = this;
        main.userAccount = {};
        main.logout = authenticationService.logout;

        activate();

        function activate() {
            main.userAccount = authenticationService.getAuthenticatedAccount();
            chatService.connectToChat(main.userAccount);
        };
    }
}());