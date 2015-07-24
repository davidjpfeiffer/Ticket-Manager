(function() {
    'use strict';

    angular
        .module('app')
        .controller('editAccountController', editAccountController);

    editAccountController.$inject = ['$routeParams', '$window', 'authenticationService', 'accountService'];

    function editAccountController($routeParams, $window, authenticationService, accountService) {
        var vm = this;
        vm.editAccount = editAccount;
        vm.account = {};
        vm.accountBeingEdited = {};

        activate();

        function editAccount() {
            return accountService.editAccountInfo($routeParams.accountId, { 'firstName': vm.accountBeingEdited.firstName, 'lastName': vm.accountBeingEdited.lastName, 'ticketUpdates': vm.accountBeingEdited.ticketUpdates, 'email': vm.accountBeingEdited.email, 'password': vm.accountBeingEdited.password, 'admin': vm.accountBeingEdited.admin })
            .then(function() { $window.location.href = '/app/accounts/' + vm.accountBeingEdited.id; });
        }

        function activate() {
            vm.account = authenticationService.getAuthenticatedAccount()
            accountService.getAccount($routeParams.accountId)
                .then(function(account) {
                    vm.accountBeingEdited = account;
                });
        }
    }
}());