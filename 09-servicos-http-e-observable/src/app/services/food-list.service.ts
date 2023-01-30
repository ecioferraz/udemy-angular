import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FoodListService {
  private foodList: string[] = ['Hamburger', 'French Fries', 'Milkshake'];

  public getFoodList() {
    return this.foodList;
  }
}
