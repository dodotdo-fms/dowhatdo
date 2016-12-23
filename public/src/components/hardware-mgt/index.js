import angular from 'angular';
import HardwareMgtAddDialog from './add-dialog';
import HardwareMgtCard from './card';
import HardwareMgtFilter from './filter';
import HardwareMgtComponent from './hardwareMgt.component';
import hardwareMgtService from './hardwareMgt.service';
import menuFilter from './menuFilter';
import sortFilter from './sortFilter';
import './hardwareMgt.less';

const hardwareMgt = angular
    .module('hardwareMgt', [
        HardwareMgtAddDialog,
        HardwareMgtCard,
        HardwareMgtFilter
    ])
    .component('dwdHardwareMgt', HardwareMgtComponent)
    .service('hardwareMgtService', hardwareMgtService)
    .filter('hardwareMgtMenuFilter', menuFilter)
    .filter('hardwareMgtSortFilter', sortFilter)
    .name;

export default hardwareMgt;
