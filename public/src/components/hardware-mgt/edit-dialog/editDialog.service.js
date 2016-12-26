class EditDialogService {
    constructor($http) {
        this.$http = $http;
    }

    getHardwareInfo(hardwareId) {
        return this.$http.get(`/api/asset/hardware/${hardwareId}`).then(result => result.data);
    }

    putHardwareInfo(hardwareId, hardwareInfo) {
        return this.$http.put(`/api/asset/hardware/${hardwareId}`, hardwareInfo).then(result => result.data);
    }
}

EditDialogService.$inject = ['$http'];

export default EditDialogService;
