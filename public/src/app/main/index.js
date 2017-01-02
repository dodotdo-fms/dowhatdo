import angular from 'angular';
import Header from '../../components/header';
import Socket from '../../common/socket';
import AssetMgt from './asset-mgt';
import MainComponent from './main.component';
import './main.less';

const main = angular
    .module('app.main', [
        Header,
        Socket,
        AssetMgt
    ])
    .component('dwdMain', MainComponent)
    .name;

export default main;
