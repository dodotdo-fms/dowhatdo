class BookMgtService {
    constructor($http) {
        this.$http = $http;
    }

    getBooks() {
        return this.$http.get('/api/asset/book').then(result => result.data);
    }
}

BookMgtService.$inject = ['$http'];

export default BookMgtService;
