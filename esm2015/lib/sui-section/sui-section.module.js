import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiSectionComponent } from "./sui-section.component";
import { MatBadgeModule } from "@angular/material/badge";
import { MatIconModule } from "@angular/material/icon";
export class SuiSectionModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VpLXNlY3Rpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2NoYWVmZmxlci11aS9zcmMvbGliL3N1aS1zZWN0aW9uL3N1aS1zZWN0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBZXZELE1BQU0sT0FBTyxnQkFBZ0I7OztZQWI1QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxhQUFhO2lCQUNkO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxtQkFBbUI7aUJBQ3BCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgU3VpU2VjdGlvbkNvbXBvbmVudCB9IGZyb20gXCIuL3N1aS1zZWN0aW9uLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBNYXRCYWRnZU1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9iYWRnZVwiO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9pY29uXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFN1aVNlY3Rpb25Db21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRCYWRnZU1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTdWlTZWN0aW9uQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpU2VjdGlvbk1vZHVsZSB7XG59XG4iXX0=