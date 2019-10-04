import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersViewerComponent } from './offers-viewer.component';

describe('OffersViewerComponent', () => {
  let component: OffersViewerComponent;
  let fixture: ComponentFixture<OffersViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
