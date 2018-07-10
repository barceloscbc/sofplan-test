import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { asyncData } from '../../../../testing/async-observable-helpers';

import { map } from 'rxjs/operators';

// re-export for tester convenience
export { TipoVeiculo }        from '../../../models/tipo-veiculo.model';
export { TipoVeiculoService } from '../tipo-veiculo.service';
export { getTestTipoVeiculo } from './test-tipo-veiculo';

import { TipoVeiculo }        from '../../../models/tipo-veiculo.model';
import { TipoVeiculoService } from '../tipo-veiculo.service';
import { getTestTipoVeiculo } from './test-tipo-veiculo';

@Injectable()
/**
 * FakeTipoVeiculoService pretends to make real http requests.
 * implements only as much of TipoVeiculoService as is actually consumed by the app
*/
export class TestTipoVeiculoService extends TipoVeiculoService {
  constructor() {
    super(null);
  }

  listaTipoVeiculo = getTestTipoVeiculo();
  lastResult: Observable<any>;

  buscaTodosTiposDeVeiculos(): Observable<TipoVeiculo[]> {
    return this.lastResult = asyncData(this.listaTipoVeiculo);
  }

}