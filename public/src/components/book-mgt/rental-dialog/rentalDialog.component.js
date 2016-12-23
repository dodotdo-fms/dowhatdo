import template from './rentalDialog.html';
import controller from './rentalDialog.controller';

const RentalDialogComponent = {
    template,
    controller,
    bindings: {
        bookId: '<',
        resolve: '&',
        close: '&'
    }
};

export default RentalDialogComponent;
