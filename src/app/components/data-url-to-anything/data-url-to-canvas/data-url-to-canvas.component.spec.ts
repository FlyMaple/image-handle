import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataUrlToCanvasComponent } from './data-url-to-canvas.component';

describe('DataUrlToCanvasComponent', () => {
  let component: DataUrlToCanvasComponent;
  let fixture: ComponentFixture<DataUrlToCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataUrlToCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataUrlToCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
