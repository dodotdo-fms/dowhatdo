class AssetMgtCtrl {
    constructor($state) {
        this.$state = $state;
    }

    $onInit() {
        this.menu = [
            { id: 0, name: '하드웨어', value: 'main.assetMgt.hardwareMgt' },
            { id: 1, name: '도서', value: 'main.assetMgt.bookMgt' }
        ];
    }

    isMenuSelected(item) {
        return this.$state.is(item.value);
    }
}

AssetMgtCtrl.$inject = [
    '$state'
];

export default AssetMgtCtrl;
