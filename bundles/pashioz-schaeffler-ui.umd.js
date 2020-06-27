(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@pashioz/schaeffler-ui', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global.pashioz = global.pashioz || {}, global.pashioz['schaeffler-ui'] = {}), global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var SchaefflerUiService = /** @class */ (function () {
        function SchaefflerUiService() {
        }
        return SchaefflerUiService;
    }());
    SchaefflerUiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SchaefflerUiService_Factory() { return new SchaefflerUiService(); }, token: SchaefflerUiService, providedIn: "root" });
    SchaefflerUiService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    SchaefflerUiService.ctorParameters = function () { return []; };

    var SchaefflerUiComponent = /** @class */ (function () {
        function SchaefflerUiComponent() {
        }
        SchaefflerUiComponent.prototype.ngOnInit = function () {
        };
        return SchaefflerUiComponent;
    }());
    SchaefflerUiComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-schaeffler-ui',
                    template: "\n    <p>\n      schaeffler-ui works!\n    </p>\n  "
                },] }
    ];
    SchaefflerUiComponent.ctorParameters = function () { return []; };

    var SchaefflerUiModule = /** @class */ (function () {
        function SchaefflerUiModule() {
        }
        return SchaefflerUiModule;
    }());
    SchaefflerUiModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [SchaefflerUiComponent],
                    imports: [],
                    exports: [SchaefflerUiComponent]
                },] }
    ];

    /*
     * Public API Surface of schaeffler-ui
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SchaefflerUiComponent = SchaefflerUiComponent;
    exports.SchaefflerUiModule = SchaefflerUiModule;
    exports.SchaefflerUiService = SchaefflerUiService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pashioz-schaeffler-ui.umd.js.map
