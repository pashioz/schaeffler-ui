import { ɵɵdefineInjectable, Injectable, Component, ViewEncapsulation, ElementRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/material/icon';
import * as ɵngcc3 from '@angular/material/badge';

function SuiSectionComponent_li_26_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", user_r1.name, " ");
} }
class SchaefflerUiService {
    constructor() { }
}
SchaefflerUiService.ɵfac = function SchaefflerUiService_Factory(t) { return new (t || SchaefflerUiService)(); };
SchaefflerUiService.ɵprov = ɵɵdefineInjectable({ factory: function SchaefflerUiService_Factory() { return new SchaefflerUiService(); }, token: SchaefflerUiService, providedIn: "root" });
SchaefflerUiService.ctorParameters = () => [];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SchaefflerUiService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class SuiSectionComponent {
    constructor(el) {
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
    ngOnInit() {
    }
}
SuiSectionComponent.ɵfac = function SuiSectionComponent_Factory(t) { return new (t || SuiSectionComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
SuiSectionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SuiSectionComponent, selectors: [["sui-section"]], decls: 29, vars: 3, consts: [[1, "sui-section"], [1, "sui-section__container"], [4, "ngFor", "ngForOf"], ["matBadge", "15", "matBadgeColor", "warn"]], template: function SuiSectionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "h1");
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "p");
        ɵngcc0.ɵɵtext(5, "Component CSS and JS class names are prefixed with ");
        ɵngcc0.ɵɵelementStart(6, "em");
        ɵngcc0.ɵɵtext(7, "sui");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(8, "sup");
        ɵngcc0.ɵɵtext(9, "*");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtext(10, " and ");
        ɵngcc0.ɵɵelementStart(11, "em");
        ɵngcc0.ɵɵtext(12, "Sui");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(13, "sup");
        ɵngcc0.ɵɵtext(14, "*");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtext(15, " respectively to indicate a ");
        ɵngcc0.ɵɵelementStart(16, "strong");
        ɵngcc0.ɵɵtext(17, "s");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtext(18, "chaeffler ");
        ɵngcc0.ɵɵelementStart(19, "strong");
        ɵngcc0.ɵɵtext(20, "UI");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtext(21, " component");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(22, "p");
        ɵngcc0.ɵɵelementStart(23, "strong");
        ɵngcc0.ɵɵtext(24, "This is an example of the library component being used directly in the project.");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(25, "ul");
        ɵngcc0.ɵɵtemplate(26, SuiSectionComponent_li_26_Template, 2, 1, "li", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(27, "mat-icon", 3);
        ɵngcc0.ɵɵtext(28, "people");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate2("Schaeffler UI Section (", ctx.componentName, "/", ctx.tagName, ")");
        ɵngcc0.ɵɵadvance(23);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.users);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc2.MatIcon, ɵngcc3.MatBadge], styles: [".sui-section{background-color:#fff;box-sizing:border-box;padding:2rem;width:100%}.sui-section__container{box-sizing:border-box;margin:0 auto;max-width:1280px;padding:1rem}.sui-section__container h1{color:#00893d}"], encapsulation: 2 });
SuiSectionComponent.ctorParameters = () => [
    { type: ElementRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SuiSectionComponent, [{
        type: Component,
        args: [{
                selector: 'sui-section',
                template: "<div class=\"sui-section\">\n  <div class=\"sui-section__container\">\n    <h1>Schaeffler UI Section ({{componentName}}/{{tagName}})</h1>\n    <p>Component CSS and JS class names are prefixed with <em>sui</em><sup>*</sup> and <em>Sui</em><sup>*</sup> respectively to indicate a <strong>s</strong>chaeffler <strong>UI</strong> component</p>\n    <p><strong>This is an example of the library component being used directly in the project.</strong></p>\n    <ul>\n      <li *ngFor=\"let user of users\">\n        {{user.name}}\n      </li>\n    </ul>\n    <mat-icon matBadge=\"15\" matBadgeColor=\"warn\">people</mat-icon>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".sui-section{background-color:#fff;box-sizing:border-box;padding:2rem;width:100%}.sui-section__container{box-sizing:border-box;margin:0 auto;max-width:1280px;padding:1rem}.sui-section__container h1{color:#00893d}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, null); })();

class SuiSectionModule {
}
SuiSectionModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SuiSectionModule });
SuiSectionModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SuiSectionModule_Factory(t) { return new (t || SuiSectionModule)(); }, imports: [[
            CommonModule,
            MatBadgeModule,
            MatIconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SuiSectionModule, { declarations: function () { return [SuiSectionComponent]; }, imports: function () { return [CommonModule,
        MatBadgeModule,
        MatIconModule]; }, exports: function () { return [SuiSectionComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SuiSectionModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    SuiSectionComponent
                ],
                imports: [
                    CommonModule,
                    MatBadgeModule,
                    MatIconModule
                ],
                exports: [
                    SuiSectionComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of schaeffler-ui
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SchaefflerUiService, SuiSectionComponent, SuiSectionModule };

//# sourceMappingURL=pashioz-schaeffler-ui.js.map