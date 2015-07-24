(function() {
    'use strict';

    angular
        .module('app')
        .factory('authenticationService', authenticationService);

    authenticationService.$inject = ['$http'];

    function authenticationService($http) {

        var service = {
            login: login,
            logout: logout,
            getAuthenticatedAccount: getAuthenticatedAccount,
        };
        return service;

        function login(email, password) {
            return $http.get('http://localhost:2001/accounts?email=' + email + '&password=' + password)
            .then(onSuccess, onFail);

            function onSuccess(response) {
                var account = response.data;
                sessionStorage.setItem('account', angular.toJson(account));
                return account;
            }

            function onFail(response) {
                sessionStorage.setItem('account', null);
                return null;
            }
        }

        function getAuthenticatedAccount() {
            return angular.fromJson(sessionStorage.getItem('account'));
        }

        function logout() {
            sessionStorage.setItem('account', null);
            window.location.href = "/";
        }
    }
}());