import angular from 'angular';
import DropdownMenu from '../../../ui/dropdown-menu';
import HardwareMgtOwnDialog from '../own-dialog';
import CardComponent from './card.component';
import './card.less';

const card = angular
    .module('hardwareMgt.card', [
        DropdownMenu,
        HardwareMgtOwnDialog
    ])
    .component('dwdHardwareMgtCard', CardComponent)
    .name;

export default card;
