import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataUrlToFileComponent } from './data-url-to-file.component';

describe('DataUrlToFileComponent', () => {
  let component: DataUrlToFileComponent;
  let fixture: ComponentFixture<DataUrlToFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataUrlToFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataUrlToFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
