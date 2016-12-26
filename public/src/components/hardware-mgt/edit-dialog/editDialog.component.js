import template from './editDialog.html';
import controller from './editDialog.controller';

const EditDialogComponent = {
    template,
    controller,
    bindings: {
        hardwareId: '<',
        resolve: '&',
        close: '&'
    }
};

export default EditDialogComponent;
