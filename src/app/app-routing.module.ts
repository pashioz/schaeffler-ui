import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuiSectionComponent } from "./core/sui-section/sui-section.component";

const routes: Routes = [
  {
    path: 'sui-section',
    component: SuiSectionComponent
  },
  {
    path: '**',
    component: SuiSectionComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
