import { TestBed, inject } from '@angular/core/testing';

import { TPHomeControlService } from './t-p-home-control.service';

describe('TPHomeControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TPHomeControlService]
    });
  });

  it('should be created', inject([TPHomeControlService], (service: TPHomeControlService) => {
    expect(service).toBeTruthy();
  }));
});
