import angular from 'angular';
import AngularUiRouter from 'angular-ui-router';
import BookMgt from '../../../components/book-mgt';
import HardwareMgt from '../../../components/hardware-mgt';
import AssetMgtComponent from './assetMgt.component';
import './assetMgt.less';

const assetMgt = angular
    .module('app.main.assetMgt', [
        AngularUiRouter,
        BookMgt,
        HardwareMgt
    ])
    .component('dwdAssetMgt', AssetMgtComponent)
    .name;

export default assetMgt;
