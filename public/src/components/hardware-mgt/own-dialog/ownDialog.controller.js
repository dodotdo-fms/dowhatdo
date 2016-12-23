class OwnDialogCtrl {
    constructor($http) {
        this.$http = $http;
    }

    $onInit() {
        this.formData = {
            owner: ''
        };
    }

    changeOwner() {
        this.$http
            .post(`/api/asset/hardware/${this.hardwareId}/own`, this.formData)
            .then(() => this.resolve());
    }
}

OwnDialogCtrl.$inject = ['$http'];

export default OwnDialogCtrl;
