import event from '../constants/event';

class AssetMgtCtrl {
    constructor($scope, $state, Socket) {
        this.$scope = $scope;
        this.$state = $state;

        this.hardwareSocket = new Socket('hardware');
        this.bookSocket = new Socket('book');
    }

    $onInit() {
        this.menu = [
            { id: 0, name: '하드웨어', value: 'assetMgt.hardware' },
            { id: 1, name: '도서', value: 'assetMgt.book' }
        ];

        this.hardwareSocket
            .connect()
            .listen('newHardware', (newHardware) => {
                this.$scope.$broadcast(event.assetMgt.SOCKET_NEW_HARDWARE, newHardware);
            })
            .listen('hardwareChanged', (changeHardware) => {
                this.$scope.$broadcast(event.assetMgt.SOCKET_HARDWARE_CHANGED, changeHardware);
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

    isMenuSelected(item) {
        return this.$state.is(item.value);
    }
}

AssetMgtCtrl.$inject = ['$scope', '$state', 'Socket'];

export default AssetMgtCtrl;
