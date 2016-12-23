import icon from '../../../constants/icon';
import string from '../../../constants/string';

class CardCtrl {
    constructor(HardwareMgtOwnDialog) {
        this.changeOwnerDialog = new HardwareMgtOwnDialog();
    }

    getIcon() {
        return icon.hardwareTypes[this.item.type];
    }

    getTypeString() {
        return string.hardwareTypes[this.item.type];
    }

    openChangeOwnerDialog() {
        this.changeOwnerDialog.setHardwareId(this.item.id).open();
    }
}

CardCtrl.$inject = ['HardwareMgtOwnDialog'];

export default CardCtrl;
