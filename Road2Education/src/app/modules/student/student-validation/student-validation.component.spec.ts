import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentValidationComponent } from './student-validation.component';

describe('StudentValidationComponent', () => {
  let component: StudentValidationComponent;
  let fixture: ComponentFixture<StudentValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
