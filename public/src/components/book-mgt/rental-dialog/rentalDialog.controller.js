class RentalDialogCtrl {
    constructor($http) {
        this.$http = $http;
    }

    $onInit() {
        this.formData = {
            rentalDate: new Date(),
            owner: ''
        };
    }

    rentalBook() {
        this.$http
            .post(`/api/asset/book/${this.bookId}/rental`, {
                owner: this.formData.owner
            })
            .then(() => this.resolve());
    }
}

RentalDialogCtrl.$inject = ['$http'];

export default RentalDialogCtrl;
