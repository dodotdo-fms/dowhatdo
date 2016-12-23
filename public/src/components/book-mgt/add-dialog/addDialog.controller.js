class AddDialogCtrl {
    constructor(bookMgtAddDialogService) {
        this.service = bookMgtAddDialogService;
    }

    $onInit() {
        this.formData = {
            name: '',
            isbn: '',
            author: ''
        };
    }

    submitNewBook() {
        this.service.postNewBook(this.formData).then(() => this.resolve());
    }
}

AddDialogCtrl.$inject = ['bookMgtAddDialogService'];

export default AddDialogCtrl;
