class HeaderCtrl {
    constructor($http, $state, $location) {
        this.$http = $http;
        this.$state = $state;
        this.$location = $location;
    }

    $onInit() {
        this.items = [
            { id: 0, name: '자산 관리', value: '/asset-mgt' }
        ];
    }

    isActive(item) {
        return this.$location.absUrl().includes(item.value);
    }

    logout() {
        this.$http.delete('/api/auth')
            .then(() => this.$state.go('login'));
    }
}

HeaderCtrl.$inject = [
    '$http',
    '$state',
    '$location'
];

export default HeaderCtrl;
