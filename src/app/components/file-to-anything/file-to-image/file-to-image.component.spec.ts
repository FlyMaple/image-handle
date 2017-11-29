import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileToImageComponent } from './file-to-image.component';

describe('FileToImageComponent', () => {
  let component: FileToImageComponent;
  let fixture: ComponentFixture<FileToImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileToImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileToImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
