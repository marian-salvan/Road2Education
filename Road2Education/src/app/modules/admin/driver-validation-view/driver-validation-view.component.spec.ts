import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverValidationViewComponent } from './driver-validation-view.component';

describe('DriverValidationViewComponent', () => {
  let component: DriverValidationViewComponent;
  let fixture: ComponentFixture<DriverValidationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverValidationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverValidationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
