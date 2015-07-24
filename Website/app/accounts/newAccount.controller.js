(function() {
    'use strict';

    angular
        .module('app')
        .controller('newAccountController', newAccountController);

    newAccountController.$inject = ['$window', 'accountService', 'authenticationService'];

    function newAccountController($window, accountService, authenticationService) {
        var vm = this;
        vm.createNewUser = createNewUser;

        activate();

        function createNewUser() {
            var account = authenticationService.getAuthenticatedAccount();
            return accountService.createAccount({ 'firstName': vm.account.firstName, 'lastName': vm.account.lastName, 'email': vm.account.email, 'password': vm.account.password, 'businessId': account.businessId })
            .then(function() { $window.location.href = '/app/accounts'; });
        }

        function activate() {
        }
    }
}());