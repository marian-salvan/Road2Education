import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSelectorFieldComponent } from './image-selector-field.component';

describe('ImageSelectorFieldComponent', () => {
  let component: ImageSelectorFieldComponent;
  let fixture: ComponentFixture<ImageSelectorFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSelectorFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSelectorFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
