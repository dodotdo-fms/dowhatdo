class CardCtrl {
    constructor($http, BookMgtRentalDialog) {
        this.$http = $http;
        this.rentalBookDailog = new BookMgtRentalDialog();
    }

    rentalBook() {
        this.rentalBookDailog
            .setBookId(this.item.id)
            .open();
    }

    returnBook() {
        this.$http.post(`/api/asset/book/${this.item.id}/return`);
    }
}

CardCtrl.$inject = ['$http', 'BookMgtRentalDialog'];

export default CardCtrl;
