(function() {
    'use strict';

    angular
        .module('app')
        .controller('ticketsController', ticketsController);

    ticketsController.$inject = ['ticketService', 'categoryService'];

    function ticketsController(ticketService, categoryService) {
        var vm = this;
        vm.tickets = [];
        vm.categories = [];

        // Sorting Variables
        vm.options = {};
        vm.options.categories = {};
        vm.options.status = {};
        vm.options.sort = {};
        vm.values = {};
        vm.values.categories = {};
        vm.values.status = {};
        vm.values.sort = {};

        activate();

        function activate() {
            ticketService.getTickets()
            .then(function(response) {
                vm.tickets = response;
            });

            categoryService.getCategories()
            .then(function(response) {
                vm.categories = response;

                vm.options.categories = [];
                vm.options.categories.push({ name: 'All Categories', value: -1 });
                vm.categories.forEach(function(category) { vm.options.categories.push({ name: category.name, value: category.id }) });
                vm.values.categories = vm.options.categories[0];
            });

            vm.options.status = [{ name: 'All Tickets', value: 'all' }, { name: 'Open Tickets Only', value: 'open' }, { name: 'Closed Tickets Only', value: 'closed' }];
            vm.options.sort = [{ name: 'Newest First' }, { name: 'Oldest First' }, { name: 'Most Important First' }, { name: 'Least Important First' }];

            vm.values.status = vm.options.status[0];
            vm.values.sort = vm.options.sort[0];
        }
    }
}());