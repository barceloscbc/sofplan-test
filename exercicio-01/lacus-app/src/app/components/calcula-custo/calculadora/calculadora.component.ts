import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Observable } from 'rxjs';
import { TipoVeiculo } from '../../../models/tipo-veiculo.model';
import {TipoVeiculoService} from '../../../services/tipo-veiculo/tipo-veiculo.service';
import { CalculaCusto } from '../../../models/calcula-custo.model';
import {CalculaCustoService} from '../../../services/calcula-custo/calcula-custo.service';
import { CustoTransporteService } from '../../../services/custo-transporte/custo-transporte.service';
import { CustoTransporte } from '../../../models/custo-transporte.model';

@Component({
  selector: 'cc-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  valorTotal:number;
  listaVeiculos:Observable<TipoVeiculo[]>;
  model: CalculaCusto;
  listaCalculoCusto:Observable<CalculaCusto[]>;
  listaCustoTransporte:Observable<CustoTransporte[]>
  newModel:CalculaCusto = {};

  constructor(private tipoVeiculoService : TipoVeiculoService , 
              private calculoCustoService: CalculaCustoService ,
              private custoTransporteService: CustoTransporteService) { 
  }

  ngOnInit() {
    this.listaCalculoCusto = this.calculoCustoService.buscaTodosCalculos();
    this.listaVeiculos = this.tipoVeiculoService.buscaTodosTiposDeVeiculos();
    this.listaCustoTransporte = this.custoTransporteService.buscaTodosCustosDeTransporte();
    this.model = this.newModel;
    this.valorTotal=0;
    this.listaCalculoCusto.subscribe(itens =>  itens.forEach(function(item){
      this.valorTotal+=item.total;
    }.bind(this)));
  }

  
  onSubmit(f: NgForm) {
    this.calculoCustoService.adicionaRegistro(this.model);
    this.listaCalculoCusto = this.calculoCustoService.buscaTodosCalculos();
    this.valorTotal=0;
    this.listaCalculoCusto.subscribe(itens =>  itens.forEach(function(item){
      this.valorTotal+=item.total;
    }.bind(this)));
    this.model = this.newModel;
  }

  onRemoveAll(){
    this.calculoCustoService.limparTodos();
    this.listaCalculoCusto = this.calculoCustoService.buscaTodosCalculos();
    this.valorTotal=0;
    this.listaCalculoCusto.subscribe(itens =>  itens.forEach(function(item){
      this.valorTotal+=item.total;
    }.bind(this)));
  }
}
