import { TestBed } from '@angular/core/testing';

import { InsperationalQuoteService } from './insperational-quote.service';

describe('InsperationalQuoteService', () => {
  let service: InsperationalQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsperationalQuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
