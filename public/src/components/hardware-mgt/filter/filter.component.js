import template from './filter.html';
import controller from './filter.controller';

const FilterComponent = {
    template,
    controller,
    bindings: {
        onFilterChange: '&'
    }
};

export default FilterComponent;
