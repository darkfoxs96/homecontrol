import { TestBed, inject } from '@angular/core/testing';

import { BotMessengerService } from './bot-messenger.service';

describe('BotMessengerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BotMessengerService]
    });
  });

  it('should be created', inject([BotMessengerService], (service: BotMessengerService) => {
    expect(service).toBeTruthy();
  }));
});
