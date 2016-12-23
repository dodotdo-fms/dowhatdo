import angular from 'angular';
import Dialog from '../../../common/dialog';
import OwnDialogComponent from './ownDialog.component';
import OwnDialogFactory from './ownDialog.factory';
import './ownDialog.less';

const addDialog = angular
    .module('hardwareMgt.ownDialog', [
        Dialog
    ])
    .component('dwdHardwareMgtOwnDialog', OwnDialogComponent)
    .factory('HardwareMgtOwnDialog', OwnDialogFactory)
    .name;

export default addDialog;
