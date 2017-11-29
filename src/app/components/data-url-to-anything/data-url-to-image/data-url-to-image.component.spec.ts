import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataUrlToImageComponent } from './data-url-to-image.component';

describe('DataUrlToImageComponent', () => {
  let component: DataUrlToImageComponent;
  let fixture: ComponentFixture<DataUrlToImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataUrlToImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataUrlToImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
