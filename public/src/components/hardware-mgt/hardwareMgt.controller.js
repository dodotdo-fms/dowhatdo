import findIndex from 'lodash.findindex';
import remove from 'lodash.remove';
import toNumber from 'lodash.tonumber';
import event from '../../constants/event';

class HardwareMgtCtrl {
    constructor($scope, hardwareMgtService, HardwareMgtAddDialog) {
        this.$scope = $scope;
        this.service = hardwareMgtService;
        this.addNewHardwareDialog = new HardwareMgtAddDialog();
    }

    $onInit() {
        this.hardwareItems = [];
        this.typeFilter = [];

        this.service.getHardwares().then((items) => {
            this.hardwareItems = items;
        });

        this.$scope.$on(event.assetMgt.SOCKET_NEW_HARDWARE, (e, newHardware) => {
            this.hardwareItems.push(newHardware);
            this.$scope.$apply();
        });

        this.$scope.$on(event.assetMgt.SOCKET_HARDWARE_CHANGED, (e, changedHardware) => {
            const index = findIndex(this.hardwareItems, { id: changedHardware.id });

            if (index === -1) {
                this.hardwareItems.push(changedHardware);
            } else {
                this.hardwareItems[index] = changedHardware;
            }

            this.$scope.$apply();
        });

        this.$scope.$on(event.assetMgt.SOCKET_HARDWARE_DELETED, (e, deletedHardware) => {
            const hardwareId = deletedHardware.id;
            remove(this.hardwareItems, item => toNumber(item.id) === toNumber(hardwareId));
            this.$scope.$apply();
        });
    }

    openAddNewHardwareDialog() {
        this.addNewHardwareDialog.open();
    }

    updateFilter(types) {
        this.typeFilter = types;
    }
}

HardwareMgtCtrl.$inject = ['$scope', 'hardwareMgtService', 'HardwareMgtAddDialog'];

export default HardwareMgtCtrl;
