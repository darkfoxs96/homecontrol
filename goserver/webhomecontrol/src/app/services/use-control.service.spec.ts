import { TestBed, inject } from '@angular/core/testing';

import { UseControlService } from './use-control.service';

describe('UseControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UseControlService]
    });
  });

  it('should be created', inject([UseControlService], (service: UseControlService) => {
    expect(service).toBeTruthy();
  }));
});
