import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { asyncData, asyncError } from '../../../testing/async-observable-helpers';
import { TipoVeiculoService } from './tipo-veiculo.service';
import { TipoVeiculo } from '../../models/tipo-veiculo.model';

describe ('TipoVeiculoService (with spies)', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: TipoVeiculoService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new TipoVeiculoService(<any> httpClientSpy);
  });

  it('should return expected TipoVeiculo (HttpClient called once)', () => {
    const expectedTipoVeiculo: TipoVeiculo[] =[
      { id: 1, veiculo: 'Caminhão  baú', fator:1.00 }, 
      { id: 2, veiculo: 'Caminhão  caçamba', fator:1.05 },
      { id: 3, veiculo: 'Carreta', fator:1.12 }
    ];

    httpClientSpy.get.and.returnValue(asyncData(expectedTipoVeiculo));

    service.buscaTodosTiposDeVeiculos().subscribe(
      listaTipoVeiculo => expect(listaTipoVeiculo).toEqual(expectedTipoVeiculo, 'expected TipoVeiculo'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));

    service.buscaTodosTiposDeVeiculos().subscribe(
      listaTipoVeiculo => fail('expected an error, not TipoVeiculo'),
      error  => expect(error.message).toContain('test 404 error')
    );
  });
});

describe('TipoVeiculoService (with mocks)', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: TipoVeiculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ TipoVeiculoService ]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(TipoVeiculoService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('#buscaTodosTiposDeVeiculos', () => {
    let expectedTipoVeiculo: TipoVeiculo[];

    beforeEach(() => {
      service = TestBed.get(TipoVeiculoService);
      expectedTipoVeiculo=[
        { id: 1, veiculo: 'Caminhão  baú', fator:1.00 }, 
        { id: 2, veiculo: 'Caminhão  caçamba', fator:1.05 },
        { id: 3, veiculo: 'Carreta', fator:1.12 }
      ] as TipoVeiculo[];
    });

    it('should return expected TipoVeiculo (called once)', () => {
      service.buscaTodosTiposDeVeiculos().subscribe(
        listaTipoVeiculo => expect(listaTipoVeiculo).toEqual(expectedTipoVeiculo, 'should return expected listaTipoVeiculo'),
        fail
      );

      const req = httpTestingController.expectOne(service.tipoVeiculoUrl);
      expect(req.request.method).toEqual('GET');

      req.flush(expectedTipoVeiculo);
    });

    it('should be OK returning no TipoVeiculo', () => {
      service.buscaTodosTiposDeVeiculos().subscribe(
        listaTipoVeiculo => expect(listaTipoVeiculo.length).toEqual(0, 'should have empty TipoVeiculo array'),
        fail
      );

      const req = httpTestingController.expectOne(service.tipoVeiculoUrl);
      req.flush([]);
    });

    it('should turn 404 into a user-friendly error', () => {
      const msg = 'Deliberate 404';
      service.buscaTodosTiposDeVeiculos().subscribe(
        listaTipoVeiculo => fail('expected to fail'),
        error => expect(error.message).toContain(msg)
      );

      const req = httpTestingController.expectOne(service.tipoVeiculoUrl);

      req.flush(msg, {status: 404, statusText: 'Not Found'});
    });

    it('should return expected TipoVeiculo (called multiple times)', () => {
      service.buscaTodosTiposDeVeiculos().subscribe();
      service.buscaTodosTiposDeVeiculos().subscribe();
      service.buscaTodosTiposDeVeiculos().subscribe(
        listaTipoVeiculo => expect(listaTipoVeiculo).toEqual(expectedTipoVeiculo, 'should return expected heroes'),
        fail
      );

      const requests = httpTestingController.match(service.tipoVeiculoUrl);
      expect(requests.length).toEqual(3, 'calls to buscaTodosTiposDeVeiculos()');

      requests[0].flush([]);
      requests[1].flush([ { id: 1, veiculo: 'Caminhão  baú', fator:1.00 }]);
      requests[2].flush(expectedTipoVeiculo);
    });
  });
});