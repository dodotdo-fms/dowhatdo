class AddDialogService {
    constructor($http) {
        this.$http = $http;
    }

    getHardwareTypes() {
        return this.$http.get('/api/asset/hardware/type').then(result => result.data);
    }

    postNewHardware(hardwareInfo) {
        return this.$http.post('/api/asset/hardware', hardwareInfo).then(result => result.data);
    }
}

AddDialogService.$inject = ['$http'];

export default AddDialogService;
