import { TestBed, inject } from '@angular/core/testing';

import { ControlledService } from './controlled.service';

describe('ControlledService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ControlledService]
    });
  });

  it('should be created', inject([ControlledService], (service: ControlledService) => {
    expect(service).toBeTruthy();
  }));
});
