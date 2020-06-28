(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material/badge'), require('@angular/material/icon')) :
    typeof define === 'function' && define.amd ? define('@pashioz/schaeffler-ui', ['exports', '@angular/core', '@angular/common', '@angular/material/badge', '@angular/material/icon'], factory) :
    (global = global || self, factory((global.pashioz = global.pashioz || {}, global.pashioz['schaeffler-ui'] = {}), global.ng.core, global.ng.common, global.ng.material.badge, global.ng.material.icon));
}(this, (function (exports, i0, common, badge, icon) { 'use strict';

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
        function SuiSectionComponent(el) {
            this.componentName = 'SuiSectionComponent';
            this.users = [
                {
                    "id": 1,
                    "name": "Leanne Graham"
                },
                {
                    "id": 2,
                    "name": "Ervin Howell"
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch"
                },
                {
                    "id": 4,
                    "name": "Patricia Lebsack"
                },
                {
                    "id": 5,
                    "name": "Chelsey Dietrich"
                }
            ];
            this.tagName = el.nativeElement.tagName.toLowerCase();
        }
        SuiSectionComponent.prototype.ngOnInit = function () {
        };
        return SuiSectionComponent;
    }());
    SuiSectionComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'sui-section',
                    template: "<div class=\"sui-section\">\n  <div class=\"sui-section__container\">\n    <h1>Schaeffler UI Section ({{componentName}}/{{tagName}})</h1>\n    <p>Component CSS and JS class names are prefixed with <em>sui</em><sup>*</sup> and <em>Sui</em><sup>*</sup> respectively to indicate a <strong>s</strong>chaeffler <strong>UI</strong> component</p>\n    <p><strong>This is an example of the library component being used directly in the project.</strong></p>\n    <ul>\n      <li *ngFor=\"let user of users\">\n        {{user.name}}\n      </li>\n    </ul>\n    <mat-icon matBadge=\"15\" matBadgeColor=\"warn\">people</mat-icon>\n  </div>\n</div>\n",
                    encapsulation: i0.ViewEncapsulation.None,
                    styles: [".sui-section{background-color:#fff;box-sizing:border-box;padding:2rem;width:100%}.sui-section__container{box-sizing:border-box;margin:0 auto;max-width:1280px;padding:1rem}.sui-section__container h1{color:#00893d}"]
                },] }
    ];
    SuiSectionComponent.ctorParameters = function () { return [
        { type: i0.ElementRef }
    ]; };

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
                        common.CommonModule,
                        badge.MatBadgeModule,
                        icon.MatIconModule
                    ],
                    exports: [
                        SuiSectionComponent
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
