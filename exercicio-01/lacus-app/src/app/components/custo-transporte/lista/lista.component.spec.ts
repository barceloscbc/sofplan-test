import { async, ComponentFixture, TestBed ,fakeAsync} from '@angular/core/testing';

import { ListaComponent } from './lista.component';
import {CustoTransporteService} from '../../../services/custo-transporte/custo-transporte.service';
import { getTestCustoTransporte, TestCustoTransporteService } from '../../../services/custo-transporte/testing/test-custo-transporte.service';

const listaCustoTransporte = getTestCustoTransporte();

describe('Custo Transporte Lista Component', () => {
  let component: ListaComponent;
  let fixture: ComponentFixture<ListaComponent>;
  let compiled: Element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaComponent ],
      providers: [
        { provide: CustoTransporteService, useClass: TestCustoTransporteService }
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

  it('render a table with the text "Tipo de via" in the first column', async(() => {
    var nodes = compiled.querySelectorAll('table > thead > th');
    expect(nodes[0].textContent).toContain('Tipo de via');
  }));
  it('render a table with the text "Custo do Km rodado" in the first column', async(() => {
    var nodes = compiled.querySelectorAll('table > thead > th');
    expect(nodes[1].textContent).toContain('Custo do Km rodado');
  }));

  it('should render the table containing the body', async(() => {
    expect(compiled.querySelector('table > tbody')).not.toBe(null);
  }));
});
