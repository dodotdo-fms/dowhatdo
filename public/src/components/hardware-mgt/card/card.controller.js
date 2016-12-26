import icon from '../../../constants/icon';
import string from '../../../constants/string';

class CardCtrl {
    constructor(HardwareMgtEditDialog, HardwareMgtOwnDialog) {
        this.editInfoDialog = new HardwareMgtEditDialog();
        this.changeOwnerDialog = new HardwareMgtOwnDialog();
    }

    getIcon() {
        return icon.hardwareTypes[this.item.type];
    }

    getTypeString() {
        return string.hardwareTypes[this.item.type];
    }

    openEditHardwareDialog() {
        this.editInfoDialog.setHardwareId(this.item.id).open();
    }

    openChangeOwnerDialog() {
        this.changeOwnerDialog.setHardwareId(this.item.id).open();
    }
}

CardCtrl.$inject = ['HardwareMgtEditDialog', 'HardwareMgtOwnDialog'];

export default CardCtrl;
