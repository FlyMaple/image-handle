import { TestBed, inject } from '@angular/core/testing';

import { HighlighjsService } from './highlighjs.service';

describe('HighlighjsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HighlighjsService]
    });
  });

  it('should be created', inject([HighlighjsService], (service: HighlighjsService) => {
    expect(service).toBeTruthy();
  }));
});
