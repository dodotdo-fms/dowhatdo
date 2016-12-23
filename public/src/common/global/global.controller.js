import event from '../../constants/event';

class GlobalCtrl {
    constructor($rootScope, $document, $window) {
        $document.on('click tap focus scroll', (ev) => {
            $rootScope.$broadcast(event.global.BLUR, { event: ev });
        });

        $window.addEventListener('resize', (ev) => {
            $rootScope.$broadcast(event.global.BLUR, { event: ev });
        });
    }
}

GlobalCtrl.$inject = ['$rootScope', '$document', '$window'];

export default GlobalCtrl;
