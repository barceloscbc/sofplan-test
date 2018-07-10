import { TipoVeiculo } from "../../../models/tipo-veiculo.model";

/** return fresh array of test CustoTransporte */
export function getTestTipoVeiculo(): TipoVeiculo[] {
  return [
    { id: 1, veiculo: 'Caminhão  baú', fator: 1.00 }, 
    { id: 2, veiculo: 'Caminhão  caçamba', fator:1.05 },
    { id: 3, veiculo: 'Carreta', fator: 1.12 }
  ];
}