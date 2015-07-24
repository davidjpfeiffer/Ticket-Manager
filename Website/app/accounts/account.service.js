(function() {
    'use strict';

    angular
        .module('app')
        .factory('accountService', accountService);

    accountService.$inject = ['$http'];

    function accountService($http) {
        var service = {
            getAccounts: getAccounts,
            getAccount: getAccount,
            editAccountInfo: editAccountInfo,
            createAccount: createAccount,
            deleteAccount: deleteAccount
        };
        return service;

        function getAccounts() {
            return $http.get('http://localhost:2001/accounts')
            .then(function(response) { return response.data; });
        }

        function getAccount(accountId) {
            return $http.get('http://localhost:2001/accounts/' + accountId)
            .then(function(response) { return response.data; });
        }

        function editAccountInfo(accountId, account) {
            return $http.put('http://localhost:2001/accounts/' + accountId, account)
            .then(function(response) { return response.data; });
        }

        function createAccount(account) {
            return $http.post('http://localhost:2001/accounts', account)
            .then(function(response) { return response.data; });
        }

        function deleteAccount(accountId) {
            return $http.delete('http://localhost:2001/accounts/' + accountId)
            .then(function(response) { return response.data; });
        }
    }
}());