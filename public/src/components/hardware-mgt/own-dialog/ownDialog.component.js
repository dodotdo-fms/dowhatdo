import template from './ownDialog.html';
import controller from './ownDialog.controller';

const OwnDialogComponent = {
    template,
    controller,
    bindings: {
        hardwareId: '<',
        resolve: '&',
        close: '&'
    }
};

export default OwnDialogComponent;
