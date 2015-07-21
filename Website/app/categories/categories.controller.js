(function() {
    'use strict';

    angular
        .module('app')
        .controller('categoriesController', categoriesController);

    categoriesController.$inject = ['categoryService'];

    function categoriesController(categoryService) {
        var vm = this;
        vm.categories = {};

        activate();

        function activate() {
            categoryService.getCategories()
                .then(function(response) {
                    vm.categories = response;
                });
        }
    }
}());