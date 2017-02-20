import icon from '../../../constants/icon';
import string from '../../../constants/string';

class CardCtrl {
    constructor($http, HardwareMgtEditDialog, HardwareMgtOwnDialog, ConfirmDialog) {
        this.$http = $http;
        this.editInfoDialog = new HardwareMgtEditDialog();
        this.changeOwnerDialog = new HardwareMgtOwnDialog();
        this.deleteConfirmDialog = new ConfirmDialog();
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

    openDeleteHardwareDialog() {
        this.deleteConfirmDialog
            .setMessage('정말 이 기기를 삭제하시겠습니까?')
            .onConfirm(() => {
                this.$http.delete(`/api/asset/hardware/${this.item.id}`);
            })
            .open();
    }
}

CardCtrl.$inject = ['$http', 'HardwareMgtEditDialog', 'HardwareMgtOwnDialog', 'ConfirmDialog'];

export default CardCtrl;
