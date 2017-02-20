class ConfirmDialog {
    constructor() {
        this.options = {
            template: '<dwd-confirm-dialog message="bindings.message" resolve="resolve()" close="close()"></dwd-confirm-dialog>'
        };

        this.dialog = new ConfirmDialog.injector.Dialog(this.options);
    }

    setMessage(message) {
        this.dialog.bind({ message });
        return this;
    }

    onConfirm(callback) {
        this.dialog.onResolve(callback);
        return this;
    }

    open() {
        this.dialog.open();
        return this;
    }
}

export default ['Dialog', (Dialog) => {
    ConfirmDialog.injector = { Dialog };
    return ConfirmDialog;
}];
