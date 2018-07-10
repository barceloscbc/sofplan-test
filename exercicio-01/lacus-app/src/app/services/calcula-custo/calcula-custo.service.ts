import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { asyncData } from '../../../testing/async-observable-helpers';
import { CalculaCusto } from '../../models/calcula-custo.model';

@Injectable({
  providedIn: 'root'
})
export class CalculaCustoService {
  private static STORAGE_KEY = 'lacus-local-custo';
  private static VALOR_KM_EXCEDENTE = 0.02;
  private listaCalculoCusto: CalculaCusto[] = [];
  
  constructor() {
    this.fetch();
   }

  buscaTodosCalculos(): Observable<CalculaCusto[]> {
    this.fetch();
    return asyncData(this.listaCalculoCusto);
  }

  adicionaRegistro(calculaCusto: CalculaCusto): CalculaCusto {
		calculaCusto.total = this.calculaCusto(calculaCusto);
		this.listaCalculoCusto.push(calculaCusto);
		this.save();
		return calculaCusto;
  }
  
  limparTodos(){
    this.listaCalculoCusto = [];
    this.save();
  }

  private calculaCusto(calculaCusto: CalculaCusto): number {
    const valoKMRodado = calculaCusto.distancia * calculaCusto.custo.custoKMRodado;
    const valorPorVeiculo = valoKMRodado * calculaCusto.veiculo.fator;
    const valorExcedente = this.calculaExcedente(calculaCusto.carga, calculaCusto.distancia);
    return valorPorVeiculo+valorExcedente;
  }

  private calculaExcedente(carga:number, distancia:number):number{
    if(carga <= 5 ){
      return 0;
    }
    const qtdVezesExcedeu = carga-5;
    return (qtdVezesExcedeu*CalculaCustoService.VALOR_KM_EXCEDENTE)*distancia;
  }
  private fetch() {
		const persistedValue = localStorage.getItem(CalculaCustoService.STORAGE_KEY);
		try {
			this.listaCalculoCusto = JSON.parse(persistedValue || '[]');
		} catch (ignore) {
			this.listaCalculoCusto = [];
		}
	}

	private save(): void {
		localStorage.setItem(CalculaCustoService.STORAGE_KEY, JSON.stringify(this.listaCalculoCusto));
	}
}
