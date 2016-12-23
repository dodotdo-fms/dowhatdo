class AddDialogService {
    constructor($http) {
        this.$http = $http;
    }

    postNewBook(bookInfo) {
        return this.$http.post('/api/asset/book', bookInfo).then(result => result.data);
    }
}

AddDialogService.$inject = ['$http'];

export default AddDialogService;
