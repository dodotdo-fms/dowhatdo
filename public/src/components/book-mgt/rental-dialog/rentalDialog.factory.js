class RentalDialogFactory {
    constructor() {
        this.options = {
            template: '<dwd-book-mgt-rental-dialog book-id="bindings.bookId" resolve="resolve()" close="close()"></dwd-book-mgt-rental-dialog>'
        };

        this.dialog = new RentalDialogFactory.injector.Dialog(this.options);
    }

    setBookId(bookId) {
        this.dialog.bind({ bookId });
        return this;
    }

    open() {
        this.dialog.open();
        return this;
    }
}

export default ['Dialog', (Dialog) => {
    RentalDialogFactory.injector = { Dialog };
    return RentalDialogFactory;
}];
