import angular from 'angular';
import DropdownMenu from '../../../ui/dropdown-menu';
import HardwareMgtEditDialog from '../edit-dialog';
import HardwareMgtOwnDialog from '../own-dialog';
import CardComponent from './card.component';
import './card.less';

const card = angular
    .module('hardwareMgt.card', [
        DropdownMenu,
        HardwareMgtEditDialog,
        HardwareMgtOwnDialog
    ])
    .component('dwdHardwareMgtCard', CardComponent)
    .name;

export default card;
