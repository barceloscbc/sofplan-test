import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { asyncData, asyncError } from '../../../testing/async-observable-helpers';
import { CustoTransporteService } from './custo-transporte.service';
import { CustoTransporte } from '../../models/custo-transporte.model';

describe ('CustoTransporteService (with spies)', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: CustoTransporteService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new CustoTransporteService(<any> httpClientSpy);
  });

  it('should return expected CustoTransporte (HttpClient called once)', () => {
    const expectedCustoTransporte: CustoTransporte[] =[
      { id: 1, tipoVia: 'Pavimentada', custoKMRodado:0.54 }, 
      { id: 2, tipoVia: 'Não Pavimentada', custoKMRodado:0.62 }
    ];

    httpClientSpy.get.and.returnValue(asyncData(expectedCustoTransporte));

    service.buscaTodosCustosDeTransporte().subscribe(
      listaCustoTransporte => expect(listaCustoTransporte).toEqual(expectedCustoTransporte, 'expected CustoTransporte'),
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

    service.buscaTodosCustosDeTransporte().subscribe(
      listaCustoTransporte => fail('expected an error, not CustoTransporte'),
      error  => expect(error.message).toContain('test 404 error')
    );
  });
});

describe('CustoTransporteService (with mocks)', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: CustoTransporteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ CustoTransporteService ]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(CustoTransporteService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('#buscaTodosCustosDeTransporte', () => {
    let expectedCustoTransporte: CustoTransporte[];

    beforeEach(() => {
      service = TestBed.get(CustoTransporteService);
      expectedCustoTransporte=[
        { id: 1, tipoVia: 'Pavimentada', custoKMRodado:0.54 }, 
        { id: 2, tipoVia: 'Não Pavimentada', custoKMRodado:0.62 }
      ] as CustoTransporte[];
    });

    it('should return expected CustoTransporte (called once)', () => {
      service.buscaTodosCustosDeTransporte().subscribe(
        listaCustoTransporte => expect(listaCustoTransporte).toEqual(expectedCustoTransporte, 'should return expected listaCustoTransporte'),
        fail
      );

      const req = httpTestingController.expectOne(service.custoTransporteUrl);
      expect(req.request.method).toEqual('GET');

      req.flush(expectedCustoTransporte);
    });

    it('should be OK returning no CustoTransporte', () => {
      service.buscaTodosCustosDeTransporte().subscribe(
        listaCustoTransporte => expect(listaCustoTransporte.length).toEqual(0, 'should have empty CustoTransporte array'),
        fail
      );

      const req = httpTestingController.expectOne(service.custoTransporteUrl);
      req.flush([]);
    });

    it('should turn 404 into a user-friendly error', () => {
      const msg = 'Deliberate 404';
      service.buscaTodosCustosDeTransporte().subscribe(
        listaCustoTransporte => fail('expected to fail'),
        error => expect(error.message).toContain(msg)
      );

      const req = httpTestingController.expectOne(service.custoTransporteUrl);

      req.flush(msg, {status: 404, statusText: 'Not Found'});
    });

    it('should return expected CustoTransporte (called multiple times)', () => {
      service.buscaTodosCustosDeTransporte().subscribe();
      service.buscaTodosCustosDeTransporte().subscribe();
      service.buscaTodosCustosDeTransporte().subscribe(
        listaCustoTransporte => expect(listaCustoTransporte).toEqual(expectedCustoTransporte, 'should return expected heroes'),
        fail
      );

      const requests = httpTestingController.match(service.custoTransporteUrl);
      expect(requests.length).toEqual(3, 'calls to buscaTodosCustosDeTransporte()');

      requests[0].flush([]);
      requests[1].flush([{ id: 1, tipoVia: 'Pavimentada', custoKMRodado:0.54}]);
      requests[2].flush(expectedCustoTransporte);
    });
  });
});