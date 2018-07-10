import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {CustoTransporteService } from '../../../services/custo-transporte/custo-transporte.service';
import {CustoTransporte} from '../../../models/custo-transporte.model';

@Component({
  selector: 'ct-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  listaCustoTransporte: Observable<CustoTransporte[]>;
  constructor( private custoTransporteService: CustoTransporteService) { }

  ngOnInit() {
     this.listaCustoTransporte = this.custoTransporteService.buscaTodosCustosDeTransporte();
  }
}
