class HardwareMgtService {
    constructor($http) {
        this.$http = $http;
    }

    getHardwares() {
        return this.$http.get('/api/asset/hardware').then(res => res.data);
    }
}

HardwareMgtService.$inject = ['$http'];

export default HardwareMgtService;
