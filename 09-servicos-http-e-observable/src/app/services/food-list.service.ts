import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import FoodList from '../module/food-list';

@Injectable({ providedIn: 'root' })
export class FoodListService {
  private baseUrl: string = 'http://localhost:3000/';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  public emitEvent = new EventEmitter();

  constructor(private httpClient: HttpClient) {}

  public getFoodList(): Observable<FoodList[]> {
    return this.httpClient.get<FoodList[]>(`${this.baseUrl}food-list`).pipe(
      (res) => res,
      (error) => error,
    );
  }

  public addFood(name: FoodList['name']): Observable<FoodList> {
    return this.httpClient
      .post<FoodList>(`${this.baseUrl}food-list`, { name }, this.httpOptions)
      .pipe(
        (res) => res,
        (error) => error,
      );
  }

  public editFoodList({ name, id }: FoodList): Observable<FoodList> {
    return this.httpClient
      .put<FoodList>(`${this.baseUrl}food-list/${id}`, { name })
      .pipe(
        (res) => res,
        (error) => error,
      );
  }

  public deleteFood(id: FoodList['id']): Observable<FoodList> {
    return this.httpClient
      .delete<FoodList>(`${this.baseUrl}food-list/${id}`)
      .pipe(
        (res) => res,
        (error) => error,
      );
  }

  public foodListAlert(food: FoodList) {
    return this.emitEvent.emit(food);
  }
}
