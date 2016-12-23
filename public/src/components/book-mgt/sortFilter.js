import sort from 'lodash.sortby';
import toLower from 'lodash.tolower';

function sortFilter(items) {
    const sortedItems = sort(items, [item => toLower(item.name)]);
    return sortedItems;
}

export default () => sortFilter;
