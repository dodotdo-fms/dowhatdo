import filter from 'lodash.filter';

class FilterCtrl {
    constructor(hardwareMgtFilterService) {
        this.service = hardwareMgtFilterService;
    }

    $onInit() {
        this.menu = [];

        this.service.getFilterMenu().then((menu) => {
            this.menu = menu;
        });
    }

    onToggleCheckbox() {
        const checkedTypes = filter(this.menu, menu => !menu.checked);
        this.onFilterChange({
            types: checkedTypes.map(menu => menu.value)
        });
    }
}

FilterCtrl.$inject = ['hardwareMgtFilterService'];

export default FilterCtrl;
