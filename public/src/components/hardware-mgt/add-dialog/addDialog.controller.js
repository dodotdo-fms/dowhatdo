/* eslint class-methods-use-this:0 */
import string from '../../../constants/string';

class AddDialogCtrl {
    constructor(hardwareMgtAddDialogService) {
        this.service = hardwareMgtAddDialogService;
    }

    $onInit() {
        this.formData = {
            name: '',
            type: null,
            modelName: '',
            macAddress: '',
            manufacturer: ''
        };
        this.hardwareTypes = [];

        this.service.getHardwareTypes().then((types) => {
            this.hardwareTypes = types;
            this.formData.type = types[0];
        });
    }

    submitNewHardware() {
        this.service.postNewHardware(this.formData).then(() => this.resolve());
    }

    getHardwareTypeAlias(type) {
        return string.hardwareTypes[type];
    }
}

AddDialogCtrl.$inject = ['hardwareMgtAddDialogService'];

export default AddDialogCtrl;
