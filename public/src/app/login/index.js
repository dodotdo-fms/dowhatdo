import angular from 'angular';
import AngularUiRouter from 'angular-ui-router';
import LoginComponent from './login.component';
import './login.less';

const login = angular
    .module('app.login', [
        AngularUiRouter
    ])
    .component('dwdLogin', LoginComponent)
    .name;

export default login;
