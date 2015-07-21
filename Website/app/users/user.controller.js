(function() {
    'use strict';

    angular
        .module('app')
        .controller('userController', userController);

    userController.$inject = ['$routeParams', '$window', 'userService', 'authenticationService'];

    function userController($routeParams, $window, userService, authenticationService) {
        var vm = this;
        vm.user = {};
        vm.deleteUser = deleteUser;

        activate();

        function deleteUser() {
            userService.deleteUser($routeParams.userId)
            .then(function() { $window.location.href = '/app/users'; });
        }

        function activate() {
            userService.getUser($routeParams.userId)
                .then(function(response) {
                    vm.user = response;
                });
        }
    }
}());