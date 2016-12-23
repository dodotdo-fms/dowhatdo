import angular from 'angular';
import GlobalCtrl from './global.controller';

const global = angular
    .module('common.global', [])
    .controller('GlobalCtrl', GlobalCtrl)
    .name;

export default global;
