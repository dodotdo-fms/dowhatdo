import angular from 'angular';
import SignUpComponent from './signUp.component';
import './signUp.less';

const signUp = angular
    .module('app.login.signUp', [])
    .component('dwdSignUp', SignUpComponent)
    .name;

export default signUp;
