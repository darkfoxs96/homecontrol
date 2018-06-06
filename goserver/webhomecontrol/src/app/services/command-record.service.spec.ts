import { TestBed, inject } from '@angular/core/testing';

import { CommandRecordService } from './command-record.service';

describe('CommandRecordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommandRecordService]
    });
  });

  it('should be created', inject([CommandRecordService], (service: CommandRecordService) => {
    expect(service).toBeTruthy();
  }));
});
