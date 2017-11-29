import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasToAnythingComponent } from './canvas-to-anything.component';

describe('CanvasToAnythingComponent', () => {
  let component: CanvasToAnythingComponent;
  let fixture: ComponentFixture<CanvasToAnythingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasToAnythingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasToAnythingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
