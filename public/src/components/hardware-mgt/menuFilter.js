import filter from 'lodash.filter';
import includes from 'lodash.includes';

function menuFilter(items, filters) {
    return filter(items, item => !includes(filters, item.type));
}

export default () => menuFilter;
