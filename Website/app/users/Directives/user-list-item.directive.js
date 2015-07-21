(function() {
    'use strict';

    angular
        .module('app')
        .directive('userListItem', userListItem);

    function userListItem() {
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: '/app/users/directives/user-list-item.directive.html',
            scope: {
                user: '='
            }
        }
    }
}());