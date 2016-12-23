import angular from 'angular';
import Dialog from '../../../common/dialog';
import AddDialogComponent from './addDialog.component';
import AddDialogFactory from './addDialog.factory';
import addDialogService from './addDialog.service';
import './addDialog.less';

const addDialog = angular
    .module('hardwareMgt.addDialog', [
        Dialog
    ])
    .component('dwdHardwareMgtAddDialog', AddDialogComponent)
    .factory('HardwareMgtAddDialog', AddDialogFactory)
    .service('hardwareMgtAddDialogService', addDialogService)
    .name;

export default addDialog;
