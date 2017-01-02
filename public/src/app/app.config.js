const routeConfig = ($locationProvider, $stateProvider, $urlRouterProvider) => {
    $locationProvider.html5Mode(true);

    $stateProvider
        .state('main', {
            url: '/',
            template: '<dwd-main></dwd-main>',
            abstract: true,
            resolve: {
                isAuthenticated: [
                    '$http', '$state',
                    ($http, $state) => $http.get('/api/auth')
                        .catch(() => $state.go('login'))
                ]
            }
        })
        .state('main.assetMgt', {
            url: 'asset-mgt',
            template: '<dwd-asset-mgt></dwd-asset-mgt>',
            abstract: true
        })
        .state('main.assetMgt.hardwareMgt', {
            url: '/hardware',
            template: '<dwd-hardware-mgt></dwd-hardware-mgt>'
        })
        .state('main.assetMgt.bookMgt', {
            url: '/book',
            template: '<dwd-book-mgt></dwd-book-mgt>'
        })
        .state('login', {
            url: '/login',
            template: '<dwd-login></dwd-login>'
        })
        .state('signUp', {
            url: '/sign-up',
            template: '<dwd-sign-up></dwd-sign-up>'
        });

    $urlRouterProvider.when('/', '/asset-mgt/hardware');
};

routeConfig.$inject = [
    '$locationProvider',
    '$stateProvider',
    '$urlRouterProvider'
];

export default {
    routeConfig
};
