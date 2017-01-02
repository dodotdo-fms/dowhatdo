import strings from '../../constants/string';

class SignUpCtrl {
    constructor($http, $state) {
        this.$http = $http;
        this.$state = $state;
    }

    $onInit() {
        this.formData = {
            name: '',
            userid: '',
            password: '',
            accessToken: ''
        };

        this.showErrorFlash = false;
        this.errorMessage = '';
    }

    signUp() {
        this.$http.post('/api/user', this.formData)
            .then(() => this.$state.go('login'))
            .catch((err) => {
                this.showErrorFlash = true;
                this.errorMessage = strings.errorAlias[err.data.errorId];
            });
    }
}

SignUpCtrl.$inject = [
    '$http',
    '$state'
];

export default SignUpCtrl;
