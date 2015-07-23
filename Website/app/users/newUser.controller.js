(function() {
    'use strict';

    angular
        .module('app')
        .controller('newUserController', newUserController);

    newUserController.$inject = ['$window', 'userService', 'authenticationService'];

    function newUserController($window, userService, authenticationService) {
        var vm = this;
        vm.createNewUser = createNewUser;

        activate();

        function createNewUser() {
            var account = authenticationService.getAuthenticatedAccount();
            return userService.createUser({ 'firstName': vm.user.firstName, 'lastName': vm.user.lastName, 'email': vm.user.email, 'password': vm.user.password, 'businessId': account.businessId })
            .then(function() { $window.location.href = '/app/users'; });
        }

        function activate() {
        }
    }
}());