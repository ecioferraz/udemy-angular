import { Component } from '@angular/core';
import FoodList from 'src/app/module/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss'],
})
export class AddFoodComponent {
  constructor(private foodListService: FoodListService) {}

  public addFood(name: FoodList['name']) {
    return this.foodListService.addFood(name).subscribe({
      next: (res) => this.foodListService.foodListAlert(res),
      error: (error) => error,
    });
  }
}
