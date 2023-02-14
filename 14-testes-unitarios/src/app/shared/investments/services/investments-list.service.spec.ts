import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Investments } from '../model/investments';
import investmentsListMock from './investments-list.mock';

import { InvestmentsListService } from './investments-list.service';

describe('InvestmentsListService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: InvestmentsListService;

  const URL =
    'https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json';

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(InvestmentsListService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('(U) should list all investments', (done) => {
    service.getInvestments().subscribe({
      next: (investments: Investments[]) => {
        expect(investments[0].name).toEqual('Banco 1');
        expect(investments[0].value).toEqual(100);
        expect(investments[4].name).toEqual('Banco 5');
        expect(investments[4].value).toEqual(100);
        done();
      },
    });

    const req = httpTestingController.expectOne(URL);

    req.flush(investmentsListMock);

    expect(req.request.method).toEqual('GET');
  });
});
