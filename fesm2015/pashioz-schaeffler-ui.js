import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

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

class SchaefflerUiComponent {
    constructor() { }
    ngOnInit() {
    }
}
SchaefflerUiComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-schaeffler-ui',
                template: `
    <p>
      schaeffler-ui works!
    </p>
  `
            },] }
];
SchaefflerUiComponent.ctorParameters = () => [];

class SchaefflerUiModule {
}
SchaefflerUiModule.decorators = [
    { type: NgModule, args: [{
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

export { SchaefflerUiComponent, SchaefflerUiModule, SchaefflerUiService };
//# sourceMappingURL=pashioz-schaeffler-ui.js.map
