import { TestBed, inject } from '@angular/core/testing';

import { SoundParsingService } from './sound-parsing.service';

describe('SoundParsingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SoundParsingService]
    });
  });

  it('should be created', inject([SoundParsingService], (service: SoundParsingService) => {
    expect(service).toBeTruthy();
  }));
});
