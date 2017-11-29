import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasToDataUrlComponent } from './canvas-to-data-url.component';

describe('CanvasToDataUrlComponent', () => {
  let component: CanvasToDataUrlComponent;
  let fixture: ComponentFixture<CanvasToDataUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasToDataUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasToDataUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
