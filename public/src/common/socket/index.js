import angular from 'angular';
import SocketFactory from './socket.factory';

const socket = angular
    .module('common.socket', [])
    .factory('Socket', SocketFactory)
    .name;

export default socket;
