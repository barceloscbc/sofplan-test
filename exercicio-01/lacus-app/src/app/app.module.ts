import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,LOCALE_ID} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import localePt from '@angular/common/locales/pt';
import { AppComponent } from './app.component';
import { CustoTransporteService } from './services/custo-transporte/custo-transporte.service';
import { ListaComponent as CustoTransporteListComponent } from './components/custo-transporte/lista/lista.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { CalculadoraComponent } from './components/calcula-custo/calculadora/calculadora.component';
import { TipoVeiculoService } from './services/tipo-veiculo/tipo-veiculo.service';
import { ListaComponent as TipoVeiculoListComponent } from './components/tipo-veiculo/lista/lista.component';

library.add(faCoffee,fas,far);
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    CustoTransporteListComponent,
    CalculadoraComponent,
    TipoVeiculoListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [
    CustoTransporteService,
    TipoVeiculoService,
    { provide: LOCALE_ID, useValue: 'pt-BR' } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
