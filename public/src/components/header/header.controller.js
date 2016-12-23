class HeaderCtrl {
    constructor($location) {
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
}

HeaderCtrl.$inject = ['$location'];

export default HeaderCtrl;
