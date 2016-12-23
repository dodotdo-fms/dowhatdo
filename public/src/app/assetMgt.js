import angular from 'angular';
import AngularUiRouter from 'angular-ui-router';
import Global from '../common/global';
import Socket from '../common/socket';
import BookMgt from '../components/book-mgt';
import HardwareMgt from '../components/hardware-mgt';
import Header from '../components/header';
import AssetMgtComponent from './assetMgt.component';
import configs from './assetMgt.config';
import './assetMgt.less';

const assetMgt = angular
    .module('assetMgt', [
        AngularUiRouter,
        Global,
        Socket,
        BookMgt,
        HardwareMgt,
        Header
    ])
    .component('dwdAssetMgt', AssetMgtComponent)
    .config(configs.routeConfig)
    .name;

export default assetMgt;
