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
    SchaefflerUiService.ɵfac = function SchaefflerUiService_Factory(t) { return new (t || SchaefflerUiService)(); };
    SchaefflerUiService.ɵprov = i0.ɵɵdefineInjectable({ token: SchaefflerUiService, factory: SchaefflerUiService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SchaefflerUiService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var SchaefflerUiComponent = /** @class */ (function () {
        function SchaefflerUiComponent() {
        }
        SchaefflerUiComponent.prototype.ngOnInit = function () {
        };
        return SchaefflerUiComponent;
    }());
    SchaefflerUiComponent.ɵfac = function SchaefflerUiComponent_Factory(t) { return new (t || SchaefflerUiComponent)(); };
    SchaefflerUiComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SchaefflerUiComponent, selectors: [["lib-schaeffler-ui"]], decls: 2, vars: 0, template: function SchaefflerUiComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, " schaeffler-ui works! ");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SchaefflerUiComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-schaeffler-ui',
                        template: "\n    <p>\n      schaeffler-ui works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var SchaefflerUiModule = /** @class */ (function () {
        function SchaefflerUiModule() {
        }
        return SchaefflerUiModule;
    }());
    SchaefflerUiModule.ɵmod = i0.ɵɵdefineNgModule({ type: SchaefflerUiModule });
    SchaefflerUiModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SchaefflerUiModule_Factory(t) { return new (t || SchaefflerUiModule)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SchaefflerUiModule, { declarations: [SchaefflerUiComponent], exports: [SchaefflerUiComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SchaefflerUiModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [SchaefflerUiComponent],
                        imports: [],
                        exports: [SchaefflerUiComponent]
                    }]
            }], null, null);
    })();

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
