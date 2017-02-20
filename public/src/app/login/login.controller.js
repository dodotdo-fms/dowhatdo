import strings from '../../constants/string';

class LoginCtrl {
    constructor($http, $state) {
        this.$http = $http;
        this.$state = $state;
    }

    $onInit() {
        this.formData = {
            userid: '',
            password: ''
        };

        this.showErrorFlash = false;
        this.errorMessage = '';
    }

    signIn() {
        this.$http.post('/api/auth', this.formData)
            .then(() => this.$state.go('main.assetMgt.hardwareMgt'))
            .catch((err) => {
                this.showErrorFlash = true;
                this.errorMessage = strings.errorAlias[err.data.errorId];
            });
    }
}

LoginCtrl.$inject = ['$http', '$state'];

export default LoginCtrl;
