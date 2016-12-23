/* eslint no-underscore-dangle:0 */
import angular from 'angular';

const extend = angular.extend;
const defaultOptions = {
    showClose: false,
    plain: true,
    closeByEscape: true,
    closeByNavigation: true,
    closeByDocument: false
};

class Dialog {
    constructor(options) {
        this.id = null;
        this.options = extend({}, defaultOptions, options);

        this._bindings = {};
        this._onResolve = Dialog.prototype.close.bind(this);
    }

    onResolve(callback) {
        this._onResolve = (...args) => {
            callback(...args);
            this.close();
        };

        return this;
    }

    bind(bindings) {
        extend(this._bindings, bindings);
        return this;
    }

    open() {
        this.close();

        const dialog = Dialog.injector.ngDialog.open(extend({}, this.options, {
            controller: ['$scope', (thisScope) => {
                extend(thisScope, {
                    bindings: this._bindings,
                    resolve: this._onResolve,
                    close: thisScope.closeThisDialog,
                    dialogId: thisScope.ngDialogId
                });

                this._closeDialog = thisScope.closeThisDialog.bind(thisScope);
                this._scope = thisScope;
            }]
        }));

        this.id = dialog.id;

        return this;
    }

    close() {
        if (this.id) {
            this._closeDialog();
            this.id = null;
        }

        return this;
    }
}

export default ['ngDialog', (ngDialog) => {
    Dialog.injector = { ngDialog };
    return Dialog;
}];
