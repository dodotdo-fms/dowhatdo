import angular from 'angular';
import DropdownMenuDirective from './dropdownMenu.direcitve';
import './dropdownMenu.less';

const dropdownMenu = angular
    .module('ui.dropdownMenu', [])
    .directive('dwdDropdownMenu', DropdownMenuDirective)
    .name;

export default dropdownMenu;
