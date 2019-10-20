import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentValidationViewComponent } from './student-validation-view.component';

describe('StudentValidationViewComponent', () => {
  let component: StudentValidationViewComponent;
  let fixture: ComponentFixture<StudentValidationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentValidationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentValidationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
