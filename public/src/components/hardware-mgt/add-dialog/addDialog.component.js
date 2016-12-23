import template from './addDialog.html';
import controller from './addDialog.controller';

const AddDialogComponent = {
    template,
    controller,
    bindings: {
        resolve: '&',
        close: '&'
    }
};

export default AddDialogComponent;
