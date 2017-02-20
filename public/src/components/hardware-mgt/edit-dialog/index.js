import angular from 'angular';
import Dialog from '../../../common/dialog';
import EditDialogComponent from './editDialog.component';
import EditDialogFactory from './editDialog.factory';
import EditDialogService from './editDialog.service';
import './editDialog.less';

const editDialog = angular
    .module('hardwareMgt.editDialog', [
        Dialog
    ])
    .component('dwdHardwareMgtEditDialog', EditDialogComponent)
    .factory('HardwareMgtEditDialog', EditDialogFactory)
    .service('hardwareMgtEditDialogService', EditDialogService)
    .name;

export default editDialog;
