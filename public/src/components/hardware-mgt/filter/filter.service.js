import icon from '../../../constants/icon';
import string from '../../../constants/string';

class FilterService {
    constructor($http) {
        this.$http = $http;
    }

    getFilterMenu() {
        return this.$http.get('/api/asset/hardwareType').then((result) => {
            const hardwareTypes = result.data;

            return hardwareTypes.map((type, idx) => ({
                id: idx,
                name: string.hardwareTypes[type],
                icon: icon.hardwareTypes[type],
                value: type,
                checked: true
            }));
        });
    }
}

FilterService.$inject = ['$http'];

export default FilterService;
