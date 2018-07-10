import { TipoVeiculo } from "./tipo-veiculo.model";
import { CustoTransporte } from "./custo-transporte.model";

export interface CalculaCusto {
    distancia?: number;
    veiculo?:TipoVeiculo;
    custo?: CustoTransporte;
    carga?:number;
    total?:number; 
}
