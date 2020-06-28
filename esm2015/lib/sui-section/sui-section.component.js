import { Component, ElementRef, ViewEncapsulation } from '@angular/core';
export class SuiSectionComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VpLXNlY3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2NoYWVmZmxlci11aS9zcmMvbGliL3N1aS1zZWN0aW9uL3N1aS1zZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVFqRixNQUFNLE9BQU8sbUJBQW1CO0lBRTlCLFlBQVksRUFBYztRQUsxQixrQkFBYSxHQUFHLHFCQUFxQixDQUFDO1FBQ3RDLFVBQUssR0FBRztZQUNOO2dCQUNFLElBQUksRUFBRSxDQUFDO2dCQUNQLE1BQU0sRUFBRSxlQUFlO2FBQ3hCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsTUFBTSxFQUFFLGNBQWM7YUFDdkI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsQ0FBQztnQkFDUCxNQUFNLEVBQUUsa0JBQWtCO2FBQzNCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsTUFBTSxFQUFFLGtCQUFrQjthQUMzQjtZQUNEO2dCQUNFLElBQUksRUFBRSxDQUFDO2dCQUNQLE1BQU0sRUFBRSxrQkFBa0I7YUFDM0I7U0FDRixDQUFDO1FBMUJBLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDeEQsQ0FBQztJQTJCRCxRQUFRO0lBQ1IsQ0FBQzs7O1lBdENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsMG9CQUEyQztnQkFFM0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7WUFQbUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWktc2VjdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWktc2VjdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1aS1zZWN0aW9uLmNvbXBvbmVudC5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdWlTZWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZikge1xuICAgIHRoaXMudGFnTmFtZSA9IGVsLm5hdGl2ZUVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgdGFnTmFtZTogc3RyaW5nO1xuICBjb21wb25lbnROYW1lID0gJ1N1aVNlY3Rpb25Db21wb25lbnQnO1xuICB1c2VycyA9IFtcbiAgICB7XG4gICAgICBcImlkXCI6IDEsXG4gICAgICBcIm5hbWVcIjogXCJMZWFubmUgR3JhaGFtXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMixcbiAgICAgIFwibmFtZVwiOiBcIkVydmluIEhvd2VsbFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDMsXG4gICAgICBcIm5hbWVcIjogXCJDbGVtZW50aW5lIEJhdWNoXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNCxcbiAgICAgIFwibmFtZVwiOiBcIlBhdHJpY2lhIExlYnNhY2tcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA1LFxuICAgICAgXCJuYW1lXCI6IFwiQ2hlbHNleSBEaWV0cmljaFwiXG4gICAgfVxuICBdO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG59XG4iXX0=