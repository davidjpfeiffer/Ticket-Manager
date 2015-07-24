(function() {
    'use strict';

    angular
        .module('app')
        .controller('accountsController', accountsController);

    accountsController.$inject = ['accountService'];

    function accountsController(accountService) {
        var vm = this;
        vm.accounts = {};

        activate();

        function activate() {
            accountService.getAccounts()
                .then(function(response) {
                    vm.accounts = response;
                });
        }
    }
}());