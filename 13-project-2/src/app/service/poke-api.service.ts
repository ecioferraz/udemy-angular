import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { BASE_URL } from '../constants';

@Injectable({ providedIn: 'root' })
export class PokeApiService {
  private baseUrl = `${BASE_URL}/?offset=0&limit=100`;

  constructor(private httpClient: HttpClient) {}

  public get getAllPokemons(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl).pipe(
      tap((res) => res),
      tap((res) =>
        res.results.map((pokemon: any) =>
          this.getPokemon(pokemon.url).subscribe({
            next: (pkmStatus) => (pokemon.status = pkmStatus),
            error: (error) => error,
          }),
        ),
      ),
    );
  }

  public getPokemon(url: string): Observable<any> {
    return this.httpClient.get<any>(url).pipe(map((res) => res));
  }
}
