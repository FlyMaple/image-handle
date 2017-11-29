import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileToAnythingComponent } from './file-to-anything.component';

describe('FileToAnythingComponent', () => {
  let component: FileToAnythingComponent;
  let fixture: ComponentFixture<FileToAnythingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileToAnythingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileToAnythingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
