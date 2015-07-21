(function() {
    'use strict';

    angular
        .module('app')
        .factory('authenticationService', authenticationService);

    authenticationService.$inject = ['$http', 'userService'];

    function authenticationService($http, userService) {

        var service = {
            login: login,
            logout: logout,
            getAuthenticatedAccount: getAuthenticatedAccount,
        };
        return service;

        function login(email, password) {
            return $http.get('http://localhost:2001/login?email=' + email + '&password=' + password)
            .then(onSuccess, onFail);

            function onSuccess(response) {
                var user = response.data;
                sessionStorage.setItem('account', angular.toJson(user));
                return user;
            }

            function onFail(response) {
                logout();
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