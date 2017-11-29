import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasToFileComponent } from './canvas-to-file.component';

describe('CanvasToFileComponent', () => {
  let component: CanvasToFileComponent;
  let fixture: ComponentFixture<CanvasToFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasToFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasToFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
