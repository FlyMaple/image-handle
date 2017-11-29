import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataUrlToAnythingComponent } from './data-url-to-anything.component';

describe('DataUrlToAnythingComponent', () => {
  let component: DataUrlToAnythingComponent;
  let fixture: ComponentFixture<DataUrlToAnythingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataUrlToAnythingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataUrlToAnythingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
