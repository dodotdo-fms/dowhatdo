class AddDialogFactory {
    constructor() {
        const options = {
            template: '<dwd-hardware-mgt-add-dialog resolve="resolve()" close="close()"></dwd-hardware-mgt-add-dialog>'
        };

        this.dialog = new AddDialogFactory.injector.Dialog(options);
    }

    open() {
        this.dialog.open();
        return this;
    }
}

export default ['Dialog', (Dialog) => {
    AddDialogFactory.injector = { Dialog };
    return AddDialogFactory;
}];
