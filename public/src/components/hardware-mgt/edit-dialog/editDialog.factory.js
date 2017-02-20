class EditDialogFactory {
    constructor() {
        this.options = {
            template: '<dwd-hardware-mgt-edit-dialog hardware-id="bindings.hardwareId" resolve="resolve()" close="close()"></dwd-hardware-mgt-edit-dialog>'
        };

        this.dialog = new EditDialogFactory.injector.Dialog(this.options);
    }

    setHardwareId(hardwareId) {
        this.dialog.bind({ hardwareId });
        return this;
    }

    open() {
        this.dialog.open();
        return this;
    }
}

export default ['Dialog', (Dialog) => {
    EditDialogFactory.injector = { Dialog };
    return EditDialogFactory;
}];
