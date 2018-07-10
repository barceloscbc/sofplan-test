import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { asyncData } from '../../../../testing/async-observable-helpers';

import { map } from 'rxjs/operators';

// re-export for tester convenience
export { CustoTransporte }        from '../../../models/custo-transporte.model';
export { CustoTransporteService } from '../custo-transporte.service';
export { getTestCustoTransporte } from './test-custo-transporte';

import { CustoTransporte }        from '../../../models/custo-transporte.model';
import { CustoTransporteService } from '../custo-transporte.service';
import { getTestCustoTransporte } from './test-custo-transporte';

@Injectable()
/**
 * FakeCustoTransporteService pretends to make real http requests.
 * implements only as much of CustoTransporteService as is actually consumed by the app
*/
export class TestCustoTransporteService extends CustoTransporteService {

  constructor() {
    super(null);
  }

  listaCustoTransporte = getTestCustoTransporte();
  lastResult: Observable<any>;

  buscaTodosCustosDeTransporte(): Observable<CustoTransporte[]> {
    return this.lastResult = asyncData(this.listaCustoTransporte);
  }

}