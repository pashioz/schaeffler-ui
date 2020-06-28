import { ɵɵdefineInjectable, Injectable, Component, ViewEncapsulation, ElementRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

class SchaefflerUiService {
    constructor() { }
}
SchaefflerUiService.ɵprov = ɵɵdefineInjectable({ factory: function SchaefflerUiService_Factory() { return new SchaefflerUiService(); }, token: SchaefflerUiService, providedIn: "root" });
SchaefflerUiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
SchaefflerUiService.ctorParameters = () => [];

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
SuiSectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'sui-section',
                template: "<div class=\"sui-section\">\n  <div class=\"sui-section__container\">\n    <h1>Schaeffler UI Section ({{componentName}}/{{tagName}})</h1>\n    <p>Component CSS and JS class names are prefixed with <em>sui</em><sup>*</sup> and <em>Sui</em><sup>*</sup> respectively to indicate a <strong>s</strong>chaeffler <strong>UI</strong> component</p>\n    <p><strong>This is an example of the library component being used directly in the project.</strong></p>\n    <ul>\n      <li *ngFor=\"let user of users\">\n        {{user.name}}\n      </li>\n    </ul>\n    <mat-icon matBadge=\"15\" matBadgeColor=\"warn\">people</mat-icon>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".sui-section{background-color:#fff;box-sizing:border-box;padding:2rem;width:100%}.sui-section__container{box-sizing:border-box;margin:0 auto;max-width:1280px;padding:1rem}.sui-section__container h1{color:#00893d}"]
            },] }
];
SuiSectionComponent.ctorParameters = () => [
    { type: ElementRef }
];

class SuiSectionModule {
}
SuiSectionModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];

/*
 * Public API Surface of schaeffler-ui
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SchaefflerUiService, SuiSectionComponent, SuiSectionModule };
//# sourceMappingURL=pashioz-schaeffler-ui.js.map
