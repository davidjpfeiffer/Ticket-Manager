(function() {
    'use strict';

    angular
        .module('app')
        .controller('editUserController', editUserController);

    editUserController.$inject = ['$routeParams', '$window', 'userService'];

    function editUserController($routeParams, $window, userService) {
        var vm = this;
        vm.editUser = editUser;
        vm.user = {};
        vm.newEmail = '';
        vm.newPassword = '';

        activate();

        function editUser() {
            if (vm.newEmail !== '') {
                vm.user.email = vm.newEmail;
            }
            if (vm.newPassword !== '') {
                vm.user.password = vm.newPassword;
            }
            console.log('test');
            return userService.editUserInfo($routeParams.userId, { 'firstName': vm.user.firstName, 'lastName': vm.user.lastName, 'ticketUpdates' : vm.user.ticketUpdates, 'email': vm.user.email, 'password': vm.user.password })
            .then(function() { $window.location.href = '/app/users/' + vm.user.id; });
        }

        function activate() {
            userService.getUser($routeParams.userId)
                .then(function(response) {
                    vm.user = response;
                });
        }
    }
}());