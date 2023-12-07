import { TestBed } from '@angular/core/testing';

import { RandomDogService } from './random-dog.service';

describe('RandomDogService', () => {
  let service: RandomDogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomDogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
