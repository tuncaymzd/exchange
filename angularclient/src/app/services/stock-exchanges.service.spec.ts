import { TestBed, inject } from '@angular/core/testing';

import { StockExchangesService } from './stock-exchanges.service';

describe('StockExchangesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockExchangesService]
    });
  });

  it('should be created', inject([StockExchangesService], (service: StockExchangesService) => {
    expect(service).toBeTruthy();
  }));
});
