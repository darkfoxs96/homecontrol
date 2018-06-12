import { TestBed, inject } from '@angular/core/testing';

import { LoadArrayService } from './load-array.service';

describe('LoadArrayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadArrayService]
    });
  });

  it('should be created', inject([LoadArrayService], (service: LoadArrayService) => {
    expect(service).toBeTruthy();
  }));
});
