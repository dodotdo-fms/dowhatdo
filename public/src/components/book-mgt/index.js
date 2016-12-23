import angular from 'angular';
import BookMgtAddDialog from './add-dialog';
import BookMgtCard from './card';
import BookMgtComponent from './bookMgt.component';
import bookMgtService from './bookMgt.service';
import sortFilter from './sortFilter';
import './bookMgt.less';

const bookMgt = angular
    .module('bookMgt', [
        BookMgtAddDialog,
        BookMgtCard
    ])
    .component('dwdBookMgt', BookMgtComponent)
    .service('bookMgtService', bookMgtService)
    .filter('bookMgtSortFilter', sortFilter)
    .name;

export default bookMgt;
