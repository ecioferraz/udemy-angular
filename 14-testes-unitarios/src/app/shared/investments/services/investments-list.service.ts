import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Investments } from '../model/investments';

@Injectable({ providedIn: 'root' })
export class InvestmentsListService {
  public url =
    'https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json';

  constructor(private httpClient: HttpClient) {}

  public getInvestments(): Observable<Investments[]> {
    return this.httpClient
      .get<Investments[]>(this.url)
      .pipe(map((investments) => investments));
  }
}
