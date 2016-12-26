import template from './confirmDialog.html';

const ConfirmDialogComponent = {
    template,
    bindings: {
        message: '<',
        resolve: '&',
        close: '&'
    }
};

export default ConfirmDialogComponent;
