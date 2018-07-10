import { async, ComponentFixture, TestBed ,fakeAsync} from '@angular/core/testing';

import { ListaComponent } from './lista.component';
import {TipoVeiculoService} from '../../../services/tipo-veiculo/tipo-veiculo.service';
import { getTestTipoVeiculo, TestTipoVeiculoService } from '../../../services/tipo-veiculo/testing/test-tipo-veiculo.service';

const listaTipoVeiculo = getTestTipoVeiculo();

describe('Tipo Veiculo Lista Component', () => {
  let component: ListaComponent;
  let fixture: ComponentFixture<ListaComponent>;
  let compiled: Element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaComponent ],
      providers: [
        { provide: TipoVeiculoService, useClass: TestTipoVeiculoService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a table', async(() => {
    expect(compiled.querySelector('table')).not.toBe(null);
  }));
  
  it('should render the table containing the header', async(() => {
    expect(compiled.querySelector('table > thead')).not.toBe(null);
  }));

  it('should render the table containing a two-column header', async(() => {
    expect(compiled.querySelectorAll('table > thead > th').length).toBe(2);
  }));

  it('render a table with the text "Veículo" in the first column', async(() => {
    var nodes = compiled.querySelectorAll('table > thead > th');
    expect(nodes[0].textContent).toContain('Veículo');
  }));
  it('render a table with the text "Fator multiplicador do custo" in the first column', async(() => {
    var nodes = compiled.querySelectorAll('table > thead > th');
    expect(nodes[1].textContent).toContain('Fator multiplicador do custo');
  }));

  it('should render the table containing the body', async(() => {
    expect(compiled.querySelector('table > tbody')).not.toBe(null);
  }));

});
