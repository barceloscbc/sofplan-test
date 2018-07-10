import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { asyncData } from '../../../testing/async-observable-helpers';
import { getTestTipoVeiculo } from './testing/test-tipo-veiculo';
import { TipoVeiculo } from '../../models/tipo-veiculo.model';


@Injectable({
  providedIn: 'root'
})
export class TipoVeiculoService {
  readonly tipoVeiculoUrl = 'api/tipoVeiculo'; 
  constructor( private http: HttpClient) { }

  buscaTodosTiposDeVeiculos(): Observable<TipoVeiculo[]> {
    return asyncData(getTestTipoVeiculo());
   /* return this.http.get<CustoTransporte[]>(this.custoTransporteUrl)
    .pipe(
      tap(listaCustoTransporte => this.log(`fetched lista de Custo de Transporte`)),
      catchError(this.handleError('buscaTodosCustosDeTransporte'))
    ) as Observable<CustoTransporte[]>;*/
  }
  
 /**
   * Returns a function that handles Http operation failures.
   * This error handler lets the app continue to run as if no error occurred.
   * @param operation - name of the operation that failed
   */
  private handleError<T> (operation = 'operation') {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error); // log to console instead
      const message = (error.error instanceof ErrorEvent) ?
        error.error.message :
       `server returned code ${error.status} with body "${error.error}"`;
      throw new Error(`${operation} failed: ${message}`);
    };

  }

  private log(message: string) {
    console.log('TipoVeiculoService: ' + message);
  }
}
