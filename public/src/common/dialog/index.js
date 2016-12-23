import angular from 'angular';
import NgDialog from 'ng-dialog';
import DialogFactory from './dialog.factory';
import './dialog.less';

const dialog = angular
    .module('common.dialog', [
        NgDialog
    ])
    .factory('Dialog', DialogFactory)
    .name;

export default dialog;
