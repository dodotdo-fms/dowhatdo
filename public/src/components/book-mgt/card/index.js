import angular from 'angular';
import DropdownMenu from '../../../ui/dropdown-menu';
import BookMgtRentalDialog from '../rental-dialog';
import CardComponent from './card.component';
import './card.less';

const card = angular
    .module('bookMgt.card', [
        DropdownMenu,
        BookMgtRentalDialog
    ])
    .component('dwdBookMgtCard', CardComponent)
    .name;

export default card;
