import { Component, OnInit } from '@angular/core';
import FoodList from 'src/app/module/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  public foodList: FoodList[] = [];

  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {
    this.foodListService.getFoodList().subscribe({
      next: (res) => (this.foodList = res),
      error: (error) => error,
    });

    this.foodListService.emitEvent.subscribe({
      next: (res: FoodList) => {
        alert(`${res.name} adicionado!`);
        return this.foodList.push(res);
      },
    });
  }

  public editFoodList(food: FoodList) {
    this.foodListService.editFoodList(food).subscribe({
      next: (res) => res,
      error: (error) => error,
    });
  }

  public deleteFood(id: FoodList['id']) {
    return this.foodListService.deleteFood(id).subscribe({
      next: () =>
        (this.foodList = this.foodList.filter((food) => food.id! !== id)),
      error: (error) => error,
    });
  }
}
