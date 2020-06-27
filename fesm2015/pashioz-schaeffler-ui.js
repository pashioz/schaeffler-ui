import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    constructor() { }
    ngOnInit() {
    }
}
SuiSectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'sui-section',
                template: "<div class=\"sui-section\">\n  <div class=\"sui-section__container\">\n    <h1>Section</h1>\n    <p>sui-section</p>\n  </div>\n</div>\n",
                styles: [".sui-section{background-color:#888;box-sizing:border-box;padding:2rem;width:100%}.sui-section__container{background-color:#c2c3c4;box-sizing:border-box;max-width:1280px;padding:1rem}"]
            },] }
];
SuiSectionComponent.ctorParameters = () => [];

class SuiSectionModule {
}
SuiSectionModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SuiSectionComponent
                ],
                imports: [
                    CommonModule
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
