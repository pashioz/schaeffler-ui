(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@pashioz/schaeffler-ui', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global.pashioz = global.pashioz || {}, global.pashioz['schaeffler-ui'] = {}), global.ng.core, global.ng.common));
}(this, (function (exports, i0, common) { 'use strict';

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

    var SuiSectionComponent = /** @class */ (function () {
        function SuiSectionComponent() {
        }
        SuiSectionComponent.prototype.ngOnInit = function () {
        };
        return SuiSectionComponent;
    }());
    SuiSectionComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'sui-section',
                    template: "<div class=\"sui-section\">\n  <div class=\"sui-section__container\">\n    <h1>Section</h1>\n    <p>sui-section</p>\n  </div>\n</div>\n",
                    styles: [".sui-section{background-color:#888;box-sizing:border-box;padding:2rem;width:100%}.sui-section__container{background-color:#c2c3c4;box-sizing:border-box;max-width:1280px;padding:1rem}"]
                },] }
    ];
    SuiSectionComponent.ctorParameters = function () { return []; };

    var SuiSectionModule = /** @class */ (function () {
        function SuiSectionModule() {
        }
        return SuiSectionModule;
    }());
    SuiSectionModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [
                        SuiSectionComponent
                    ],
                    imports: [
                        common.CommonModule
                    ]
                },] }
    ];

    /*
     * Public API Surface of schaeffler-ui
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SchaefflerUiService = SchaefflerUiService;
    exports.SuiSectionComponent = SuiSectionComponent;
    exports.SuiSectionModule = SuiSectionModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pashioz-schaeffler-ui.umd.js.map
