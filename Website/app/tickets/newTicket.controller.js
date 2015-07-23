(function() {
    'use strict';

    angular
        .module('app')
        .controller('newTicketController', newTicketController);

    newTicketController.$inject = ['$window', 'ticketService', 'categoryService', 'authenticationService'];

    function newTicketController($window, ticketService, categoryService, authenticationService) {
        var vm = this;
        vm.categories = {};
        vm.createNewTicket = createNewTicket;

        activate();

        function createNewTicket() {
            var account = authenticationService.getAuthenticatedAccount();
            return ticketService.createTicket({ 'title': vm.title, 'priority': vm.priority, 'categoryId': vm.category.id, 'content': vm.content, 'creatorId': account.id })
            .then(function() { $window.location.href = '/app/tickets'; });
        }

        function activate() {
            categoryService.getCategories()
                .then(function(response) {
                    vm.categories = response;
                });
        }
    }
}());