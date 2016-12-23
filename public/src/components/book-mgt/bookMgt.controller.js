import findIndex from 'lodash.findindex';
import event from '../../constants/event';

class BookMgtCtrl {
    constructor($scope, bookMgtService, BookMgtAddDialog) {
        this.$scope = $scope;
        this.service = bookMgtService;
        this.addBookDialog = new BookMgtAddDialog();
    }

    $onInit() {
        this.bookItems = [];

        this.service.getBooks().then((items) => {
            this.bookItems = items;
        });

        this.$scope.$on(event.assetMgt.SOCKET_NEW_BOOK, (e, newBook) => {
            this.bookItems.push(newBook);
            this.$scope.$apply();
        });

        this.$scope.$on(event.assetMgt.SOCKET_BOOK_CHANGED, (e, changedBook) => {
            const index = findIndex(this.bookItems, { id: changedBook.id });

            if (index === -1) {
                this.bookItems.push(changedBook);
            } else {
                this.bookItems[index] = changedBook;
            }

            this.$scope.$apply();
        });
    }

    openAddBookDialog() {
        this.addBookDialog.open();
    }
}

BookMgtCtrl.$inject = ['$scope', 'bookMgtService', 'BookMgtAddDialog'];

export default BookMgtCtrl;
