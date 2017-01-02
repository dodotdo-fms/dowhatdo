import event from '../../constants/event';

class MainCtrl {
    constructor($scope, $state, Socket) {
        this.$scope = $scope;
        this.$state = $state;

        this.hardwareSocket = new Socket('hardware');
        this.bookSocket = new Socket('book');
    }

    $onInit() {
        this.hardwareSocket
            .connect()
            .listen('newHardware', (newHardware) => {
                this.$scope.$broadcast(event.assetMgt.SOCKET_NEW_HARDWARE, newHardware);
            })
            .listen('hardwareChanged', (changeHardware) => {
                this.$scope.$broadcast(event.assetMgt.SOCKET_HARDWARE_CHANGED, changeHardware);
            })
            .listen('hardwareDeleted', (deletedHardware) => {
                this.$scope.$broadcast(event.assetMgt.SOCKET_HARDWARE_DELETED, deletedHardware);
            });

        this.bookSocket
            .connect()
            .listen('newBook', (newBook) => {
                this.$scope.$broadcast(event.assetMgt.SOCKET_NEW_BOOK, newBook);
            })
            .listen('bookChanged', (changedBook) => {
                this.$scope.$broadcast(event.assetMgt.SOCKET_BOOK_CHANGED, changedBook);
            });
    }

    $onDestroy() {
        this.hardwareSocket.disconnect();
        this.bookSocket.disconnect();
    }
}

MainCtrl.$inject = ['$scope', '$state', 'Socket'];

export default MainCtrl;
