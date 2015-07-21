(function() {
    'use strict';

    angular
        .module('app')
        .controller('editTicketController', editTicketController);

    editTicketController.$inject = ['$window', '$routeParams', 'ticketService', 'categoryService', 'authenticationService'];

    function editTicketController($window, $routeParams, ticketService, categoryService, authenticationService) {
        var vm = this;
        vm.ticket = {};
        vm.selectedCategory = {};
        vm.categories = [];
        vm.editTicket = editTicket;

        activate();

        function editTicket(title, content, priority, categoryId) {
            var account = authenticationService.getAuthenticatedAccount();
            return ticketService.editTicket(vm.ticket.id, { 'title': title, 'content' : content, 'priority': priority, 'categoryId': categoryId, 'content': content, 'status': vm.ticket.status })
            .then(function() { $window.location.href = '/app/tickets/' + vm.ticket.id; });
        }

        function activate() { } {
            ticketService.getTicket($routeParams.ticketId)
                .then(function(response) {
                    vm.ticket = response;

                    return categoryService.getCategories();
                }).then(function(categories) {
                    vm.categories = categories;
                    vm.categories.forEach(function(category) {
                        if (category.id === vm.ticket.categoryId) {
                            vm.selectedCategory = category;
                        }
                    })
                });
        }
    }
}());