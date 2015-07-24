(function() {
    'use strict';

    angular
        .module('app')
        .controller('accountController', accountController);

    accountController.$inject = ['$routeParams', '$window', 'accountService', 'authenticationService'];

    function accountController($routeParams, $window, accountService, authenticationService) {
        var vm = this;
        vm.account = {};
        vm.deleteAccount = deleteAccount;

        activate();

        function deleteAccount() {
            accountService.deleteAccount($routeParams.accountId)
            .then(function() { $window.location.href = '/app/accounts'; });
        }

        function activate() {
            accountService.getAccount($routeParams.accountId)
                .then(function(response) {
                    vm.account = response;
                });
        }
    }
}());