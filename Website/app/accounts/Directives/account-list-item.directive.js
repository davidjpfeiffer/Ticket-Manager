(function() {
    'use strict';

    angular
        .module('app')
        .directive('accountListItem', accountListItem);

    function accountListItem() {
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: '/app/accounts/directives/account-list-item.directive.html',
            scope: {
                account: '='
            }
        }
    }
}());