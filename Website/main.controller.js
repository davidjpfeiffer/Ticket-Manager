(function() {
    'use strict';

    angular
        .module('app')
        .controller('mainController', mainController);

    mainController.$inject = ['authenticationService', 'chatService'];

    function mainController(authenticationService, chatService) {
        var main = this;
        main.account = {};
        main.logout = authenticationService.logout;

        activate();

        function activate() {
            main.account = authenticationService.getAuthenticatedAccount();
            chatService.connectToChat(main.account);
        };
    }
}());