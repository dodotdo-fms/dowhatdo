import angular from 'angular';
import Dialog from '../../../common/dialog';
import AddDialogComponent from './addDialog.component';
import AddDialogFactory from './addDialog.factory';
import addDialogService from './addDialog.service';
import './addDialog.less';

const addDialog = angular
    .module('bookMgt.addDialog', [
        Dialog
    ])
    .component('dwdBookMgtAddDialog', AddDialogComponent)
    .factory('BookMgtAddDialog', AddDialogFactory)
    .service('bookMgtAddDialogService', addDialogService)
    .name;

export default addDialog;
