import angular from 'angular';
import AngularUiRouter from 'angular-ui-router';
import HeaderComponent from './header.component';
import './header.less';

const header = angular
    .module('components.header', [
        AngularUiRouter
    ])
    .component('dwdHeader', HeaderComponent)
    .name;

export default header;
