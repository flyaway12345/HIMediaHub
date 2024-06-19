import { TestBed } from '@angular/core/testing';

import { AppDirectoryServiceService } from './app-directory-service.service';

describe('AppDirectoryServiceService', () => {
  let service: AppDirectoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppDirectoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
