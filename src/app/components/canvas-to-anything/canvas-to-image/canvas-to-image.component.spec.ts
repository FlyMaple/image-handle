import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasToImageComponent } from './canvas-to-image.component';

describe('CanvasToImageComponent', () => {
  let component: CanvasToImageComponent;
  let fixture: ComponentFixture<CanvasToImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasToImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasToImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
