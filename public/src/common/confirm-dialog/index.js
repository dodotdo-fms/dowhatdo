import angular from 'angular';
import Dialog from '../dialog';
import ConfirmDialogComponent from './confirmDialog.component';
import ConfirmDialogFactory from './confirmDialog.factory';
import './confirmDialog.less';

const confirmDialog = angular
    .module('common.confirmDialog', [
        Dialog
    ])
    .component('dwdConfirmDialog', ConfirmDialogComponent)
    .factory('ConfirmDialog', ConfirmDialogFactory)
    .name;

export default confirmDialog;
