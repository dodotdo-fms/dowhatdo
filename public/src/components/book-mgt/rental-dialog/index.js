import angular from 'angular';
import Dialog from '../../../common/dialog';
import RentalDialogComponent from './rentalDialog.component';
import RentalDialogFactory from './rentalDialog.factory';
import './rentalDialog.less';

const rentalDialog = angular
    .module('bookMgt.rentalDialog', [
        Dialog
    ])
    .component('dwdBookMgtRentalDialog', RentalDialogComponent)
    .factory('BookMgtRentalDialog', RentalDialogFactory)
    .name;

export default rentalDialog;
