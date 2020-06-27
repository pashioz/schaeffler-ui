import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class SchaefflerUiService {
    constructor() { }
}
SchaefflerUiService.ɵfac = function SchaefflerUiService_Factory(t) { return new (t || SchaefflerUiService)(); };
SchaefflerUiService.ɵprov = ɵɵdefineInjectable({ token: SchaefflerUiService, factory: SchaefflerUiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SchaefflerUiService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class SchaefflerUiComponent {
    constructor() { }
    ngOnInit() {
    }
}
SchaefflerUiComponent.ɵfac = function SchaefflerUiComponent_Factory(t) { return new (t || SchaefflerUiComponent)(); };
SchaefflerUiComponent.ɵcmp = ɵɵdefineComponent({ type: SchaefflerUiComponent, selectors: [["lib-schaeffler-ui"]], decls: 2, vars: 0, template: function SchaefflerUiComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " schaeffler-ui works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SchaefflerUiComponent, [{
        type: Component,
        args: [{
                selector: 'lib-schaeffler-ui',
                template: `
    <p>
      schaeffler-ui works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class SchaefflerUiModule {
}
SchaefflerUiModule.ɵmod = ɵɵdefineNgModule({ type: SchaefflerUiModule });
SchaefflerUiModule.ɵinj = ɵɵdefineInjector({ factory: function SchaefflerUiModule_Factory(t) { return new (t || SchaefflerUiModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SchaefflerUiModule, { declarations: [SchaefflerUiComponent], exports: [SchaefflerUiComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SchaefflerUiModule, [{
        type: NgModule,
        args: [{
                declarations: [SchaefflerUiComponent],
                imports: [],
                exports: [SchaefflerUiComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of schaeffler-ui
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SchaefflerUiComponent, SchaefflerUiModule, SchaefflerUiService };
//# sourceMappingURL=pashioz-schaeffler-ui.js.map
