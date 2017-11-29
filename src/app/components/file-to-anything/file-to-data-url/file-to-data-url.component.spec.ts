import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileToDataUrlComponent } from './file-to-data-url.component';

describe('FileToDataUrlComponent', () => {
  let component: FileToDataUrlComponent;
  let fixture: ComponentFixture<FileToDataUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileToDataUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileToDataUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
