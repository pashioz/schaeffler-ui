import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiSectionComponent } from './sui-section.component';

describe('SuiSectionComponent', () => {
  let component: SuiSectionComponent;
  let fixture: ComponentFixture<SuiSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
