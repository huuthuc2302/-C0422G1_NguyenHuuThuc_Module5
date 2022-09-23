import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFacilityComponent } from './display-facility.component';

describe('DisplayFacilityComponent', () => {
  let component: DisplayFacilityComponent;
  let fixture: ComponentFixture<DisplayFacilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayFacilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
