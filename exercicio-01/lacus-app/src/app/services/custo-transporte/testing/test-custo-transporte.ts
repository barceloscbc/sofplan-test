import { CustoTransporte } from '../../../models/custo-transporte.model';

/** return fresh array of test CustoTransporte */
export function getTestCustoTransporte(): CustoTransporte[] {
  return [
    { id: 1, tipoVia: 'Pavimentada', custoKMRodado:0.54 }, 
    { id: 2, tipoVia: 'Não Pavimentada', custoKMRodado:0.62 }
  ];
}