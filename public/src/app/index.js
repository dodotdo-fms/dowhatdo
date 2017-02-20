import angular from 'angular';
import AngularUiRouter from 'angular-ui-router';
import Global from '../common/global';
import Main from './main';
import Login from './login';
import SignUp from './sign-up';
import AppComponent from './app.component';
import configs from './app.config';
import './app.less';

const app = angular
    .module('app', [
        AngularUiRouter,
        Global,
        Main,
        Login,
        SignUp
    ])
    .component('app', AppComponent)
    .config(configs.routeConfig)
    .name;

export default app;
