import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {TipoVeiculoService } from '../../../services/tipo-veiculo/tipo-veiculo.service';
import {TipoVeiculo} from '../../../models/tipo-veiculo.model';

@Component({
  selector: 'tv-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  listaTipoVeiculo: Observable<TipoVeiculo[]>;
  constructor( private tipoVeiculoService: TipoVeiculoService) { }

  ngOnInit() {
     this.listaTipoVeiculo = this.tipoVeiculoService.buscaTodosTiposDeVeiculos();
  }
}
