(function() {
    'use strict';

    angular
        .module('app')
        .config(config)
        .run(check);

    config.$inject = ['$routeProvider', '$locationProvider', 'toastrConfig'];

    function config($routeProvider, $locationProvider, toastrConfig) {
        $routeProvider
        .when('/app/dashboard', {
            templateUrl: '/app/dashboard/dashboard.html'
        })
        .when('/app/tickets', {
            templateUrl: '/app/tickets/tickets.html',
            controller: 'ticketsController',
            controllerAs: 'vm'
        })
        .when('/app/tickets/new', {
            templateUrl: '/app/tickets/newTicket.html',
            controller: 'newTicketController',
            controllerAs: 'vm'
        })
        .when('/app/tickets/:ticketId', {
            templateUrl: '/app/tickets/ticket.html',
            controller: 'ticketController',
            controllerAs: 'vm'
        })
        .when('/app/tickets/:ticketId/edit', {
            templateUrl: '/app/tickets/editTicket.html',
            controller: 'editTicketController',
            controllerAs: 'vm'
        })
        .when('/app/tickets/:ticketId/update', {
            templateUrl: '/app/tickets/updateTicket.html',
            controller: 'ticketController',
            controllerAs: 'vm'
        })
        .when('/app/categories', {
            templateUrl: '/app/categories/categories.html',
            controller: 'categoriesController',
            controllerAs: 'vm'
        })
        .when('/app/categories/new', {
            templateUrl: '/app/categories/newCategory.html',
            controller: 'newCategoryController',
            controllerAs: 'vm'
        })
        .when('/app/categories/:categoryId', {
            templateUrl: '/app/categories/category.html',
            controller: 'categoryController',
            controllerAs: 'vm'
        })
        .when('/app/categories/:categoryId/edit', {
            templateUrl: '/app/categories/editCategory.html',
            controller: 'editCategoryController',
            controllerAs: 'vm'
        })
        .when('/app/users', {
            templateUrl: '/app/users/users.html',
            controller: 'usersController',
            controllerAs: 'vm'
        })
        .when('/app/users/new', {
            templateUrl: '/app/users/newUser.html',
            controller: 'newUserController',
            controllerAs: 'vm'
        })
        .when('/app/users/:userId', {
            templateUrl: '/app/users/user.html',
            controller: 'userController',
            controllerAs: 'vm'
        })
        .when('/app/users/:userId/edit', {
            templateUrl: '/app/users/editUser.html',
            controller: 'editUserController',
            controllerAs: 'vm'
        })
        .when('/app/messages', {
            templateUrl: '/app/messages/messages.html',
            controller: 'usersController',
            controllerAs: 'vm'
        })
        .when('/app/messages/:recipientId', {
            templateUrl: '/app/messages/message.html',
            controller: 'messageController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/app/dashboard'
        });

        $locationProvider.html5Mode(true);

        angular.extend(toastrConfig, {
            allowHtml: true,
            autoDismiss: false,
            closeButton: false,
            closeHtml: '<button>&times;</button>',
            containerId: 'toast-container',
            extendedTimeOut: 1000,
            iconClasses: {
                error: 'toast-error',
                info: 'toast-info',
                success: 'toast-success',
                warning: 'toast-warning'
            },
            maxOpened: 0,    
            messageClass: 'toast-message',
            newestOnTop: true,
            onHidden: null,
            onShown: null,
            positionClass: 'toast-bottom-right',
            preventDuplicates: false,
            preventOpenDuplicates: false,
            progressBar: false,
            tapToDismiss: true,
            target: 'body',
            templates: {
                toast: 'directives/toast/toast.html',
                progressbar: 'directives/progressbar/progressbar.html'
            },
            timeOut: 5000,
            titleClass: 'toast-title',
            toastClass: 'toast'
        });
    }

    check.$inject = ['$rootScope', '$location', 'authenticationService'];

    function check($rootScope, $location, authenticationService) {
        $rootScope.$on('$routeChangeStart', function() {
            var account = authenticationService.getAuthenticatedAccount();

            if (account === null && (window.location.href.indexOf('app') > -1)) {
                window.location.href = "/";
                console.log('Route Unauthenticated');
            } else {
                console.log('Route Authenticated');
            }
        });
    }
}());
