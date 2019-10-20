import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationResolveComponent } from './validation-resolve.component';

describe('ValidationResolveComponent', () => {
  let component: ValidationResolveComponent;
  let fixture: ComponentFixture<ValidationResolveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationResolveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationResolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
