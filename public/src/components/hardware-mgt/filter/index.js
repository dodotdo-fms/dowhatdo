import angular from 'angular';
import FilterComponent from './filter.component';
import FilterService from './filter.service';
import './filter.less';

const filter = angular
    .module('hardwareMgt.filter', [])
    .component('dwdHardwareMgtFilter', FilterComponent)
    .service('hardwareMgtFilterService', FilterService)
    .name;

export default filter;
