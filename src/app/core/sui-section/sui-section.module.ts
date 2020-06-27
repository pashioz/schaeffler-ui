import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiSectionComponent } from './sui-section.component';

@NgModule({
  declarations: [
    SuiSectionComponent
  ],
  exports: [
    SuiSectionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SuiSectionModule { }
