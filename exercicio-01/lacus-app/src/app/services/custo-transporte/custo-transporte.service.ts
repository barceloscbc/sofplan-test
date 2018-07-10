import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CustoTransporte } from '../../models/custo-transporte.model';
import { asyncData } from '../../../testing/async-observable-helpers';
import { getTestCustoTransporte } from './testing/test-custo-transporte';

@Injectable({
  providedIn: 'root'
})
export class CustoTransporteService {
  readonly custoTransporteUrl = 'api/custoTransporte'; 
  constructor( private http: HttpClient) { }

  buscaTodosCustosDeTransporte(): Observable<CustoTransporte[]> {
    return asyncData(getTestCustoTransporte());
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
    console.log('CustoTransporteService: ' + message);
  }
}
