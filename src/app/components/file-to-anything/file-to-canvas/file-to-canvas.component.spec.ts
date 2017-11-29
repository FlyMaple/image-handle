import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileToCanvasComponent } from './file-to-canvas.component';

describe('FileToCanvasComponent', () => {
  let component: FileToCanvasComponent;
  let fixture: ComponentFixture<FileToCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileToCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileToCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
