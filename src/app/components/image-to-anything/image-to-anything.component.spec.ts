import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageToAnythingComponent } from './image-to-anything.component';

describe('ImageToAnythingComponent', () => {
  let component: ImageToAnythingComponent;
  let fixture: ComponentFixture<ImageToAnythingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageToAnythingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageToAnythingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
