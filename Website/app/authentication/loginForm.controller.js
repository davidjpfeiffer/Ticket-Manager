(function() {
    'use strict';

    angular
        .module('app')
        .controller('loginFormController', loginFormController);

    loginFormController.$inject = ['$window', 'authenticationService', 'toastr'];

    function loginFormController($window, authenticationService, toastr) {
        var vm = this;
        vm.email;
        vm.password;
        vm.submit = submit;

        function submit() {
            authenticationService.login(vm.email, vm.password).then(onSuccess, onFail);

            function onSuccess(account) {
                if (account === null) {
                    toastr.error('Please try again.', 'Login Unsuccessful');
                }
                else {
                    $window.location.href = '/app/dashboard';
                }
            }

            function onFail() {
                toastr.error('Server Error');
            }
        }
    }
}());