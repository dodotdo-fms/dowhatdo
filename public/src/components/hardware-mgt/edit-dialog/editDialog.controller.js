class EditDialogCtrl {
    constructor(service) {
        this.service = service;
    }

    $onInit() {
        this.formData = {
            name: '',
            modelName: '',
            macAddress: '',
            manufacturer: ''
        };

        this.service.getHardwareInfo(this.hardwareId).then((info) => {
            this.formData.name = info.name;
            this.formData.modelName = info.modelName;
            this.formData.macAddress = info.macAddress;
            this.formData.manufacturer = info.manufacturer;
        });
    }

    changeHardwareInfo() {
        this.service.putHardwareInfo(this.hardwareId, this.formData).then(() => this.resolve());
    }
}

EditDialogCtrl.$inject = ['hardwareMgtEditDialogService'];

export default EditDialogCtrl;
