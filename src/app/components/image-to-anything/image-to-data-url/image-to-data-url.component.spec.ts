import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageToDataUrlComponent } from './image-to-data-url.component';

describe('ImageToDataUrlComponent', () => {
  let component: ImageToDataUrlComponent;
  let fixture: ComponentFixture<ImageToDataUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageToDataUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageToDataUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
