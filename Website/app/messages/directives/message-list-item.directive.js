(function() {
    'use strict';

    angular
        .module('app')
        .directive('messageListItem', messageListItem);

    function messageListItem() {
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: '/app/messages/directives/message-list-item.directive.html',
            scope: {
                user: '='
            }
        }
    }
}());