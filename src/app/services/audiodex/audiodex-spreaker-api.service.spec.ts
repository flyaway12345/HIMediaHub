import { TestBed } from '@angular/core/testing';

import { AudiodexSpreakerAPIService } from './audiodex-spreaker-api.service';

describe('AudiodexSpreakerAPIService', () => {
  let service: AudiodexSpreakerAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudiodexSpreakerAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
