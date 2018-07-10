import { TestBed, inject } from '@angular/core/testing';

import { CalculaCustoService } from './calcula-custo.service';

describe('CalculaCustoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculaCustoService]
    });
  });

  it('should be created', inject([CalculaCustoService], (service: CalculaCustoService) => {
    expect(service).toBeTruthy();
  }));
});
