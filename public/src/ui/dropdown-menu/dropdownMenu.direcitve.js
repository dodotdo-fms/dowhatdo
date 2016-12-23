/* eslint func-names:0, no-param-reassign:0 */
import isDomEventFromThisElem from '../../utils/isDomEventFromThisElem';
import event from '../../constants/event';
import template from './dropdownMenu.html';

function DropdownMenuDirective() {
    const config = {
        restrict: 'EA',
        template,
        replace: false,
        transclude: {
            toggler: 'dwdDropdownMenuToggler',
            content: 'dwdDropdownMenuContent'
        }
    };

    config.scope = {
        dir: '@'
    };

    config.bindToController = true;
    config.controllerAs = '$ctrl';

    config.controller = function controller() {
        const ctrl = this;

        ctrl.expanded = false;

        ctrl.toggle = () => {
            ctrl.expanded = !ctrl.expanded;
        };
    };

    config.link = (scope, elem, attrs, ctrl) => {
        scope.$on(event.global.BLUR, (e, data) => {
            const ev = data.event;

            if (!isDomEventFromThisElem(elem, ev)) {
                ctrl.expanded = false;
            }

            scope.$apply();
        });
    };

    return config;
}

export default DropdownMenuDirective;
