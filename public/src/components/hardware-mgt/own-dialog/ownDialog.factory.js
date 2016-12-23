class OwnDialogFactory {
    constructor() {
        const options = {
            template: `<dwd-hardware-mgt-own-dialog 
                    hardware-id="bindings.hardwareId" 
                    resolve="resolve()" 
                    close="close()"></dwd-hardware-mgt-own-dialog>`
        };

        this.dialog = new OwnDialogFactory.injector.Dialog(options);
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
    OwnDialogFactory.injector = { Dialog };
    return OwnDialogFactory;
}];
