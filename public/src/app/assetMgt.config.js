const routeConfig = ($locationProvider, $stateProvider, $urlRouterProvider) => {
    $locationProvider.html5Mode(false);

    $stateProvider
        .state('assetMgt', {
            url: '',
            template: '<dwd-asset-mgt></dwd-asset-mgt>',
            abstract: true
        })
        .state('assetMgt.hardware', {
            url: '/hardware',
            template: '<dwd-hardware-mgt></dwd-hardware-mgt>'
        })
        .state('assetMgt.book', {
            url: '/book',
            template: '<dwd-book-mgt></dwd-book-mgt>'
        });

    $urlRouterProvider.when('', ['$state', $state => $state.go('assetMgt.hardware')]);
};

routeConfig.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

export default { routeConfig };
