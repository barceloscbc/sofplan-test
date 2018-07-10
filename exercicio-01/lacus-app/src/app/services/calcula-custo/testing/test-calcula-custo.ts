import { CalculaCusto } from '../../../models/calcula-custo.model';

/** return fresh array of test CalculaCusto */
export function getTestCalculaCusto(): CalculaCusto[] {
  return [
    { distancia: 100, veiculo:{ id: 2, veiculo: 'Caminhão  caçamba', fator:1.05 },custo:{ id: 1, tipoVia: 'Pavimentada', custoKMRodado:0.54 }, carga:8, total: 62.70 }, 
    { distancia: 60, veiculo:{ id: 1, veiculo: 'Caminhão  baú', fator: 1.00 },custo:{ id: 2, tipoVia: 'Não Pavimentada', custoKMRodado:0.62 }, carga:4, total: 37.20 }, 
    { distancia: 180, veiculo:{ id: 3, veiculo: 'Carreta', fator: 1.12 },custo:{ id: 2, tipoVia: 'Não Pavimentada', custoKMRodado:0.62 }, carga:12, total: 150.19 }, 
    { distancia: 80, veiculo:{ id: 1, veiculo: 'Caminhão  baú', fator: 1.00 },custo:{ id: 1, tipoVia: 'Pavimentada', custoKMRodado:0.54 }, carga:6, total: 30.00 }, 
    { distancia: 20, veiculo:{ id: 1, veiculo: 'Caminhão  baú', fator: 1.00 },custo:{ id: 2, tipoVia: 'Não Pavimentada', custoKMRodado:0.62 }, carga:6, total: 27.60 }, 
    { distancia: 50, veiculo:{ id: 2, veiculo: 'Caminhão  caçamba', fator:1.05 },custo:{ id: 1, tipoVia: 'Pavimentada', custoKMRodado:0.54 }, carga:5, total: 20.78 }, 
    { distancia: 30, veiculo:{ id: 2, veiculo: 'Caminhão  caçamba', fator:1.05 },custo:{ id: 2, tipoVia: 'Não Pavimentada', custoKMRodado:0.62 }, carga:5, total: 20.00 }, 
  ];
}