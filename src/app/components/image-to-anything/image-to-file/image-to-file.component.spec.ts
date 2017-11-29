import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageToFileComponent } from './image-to-file.component';

describe('ImageToFileComponent', () => {
  let component: ImageToFileComponent;
  let fixture: ComponentFixture<ImageToFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageToFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageToFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
