import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AddFoodComponent } from './add-food/add-food.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddFoodComponent, FoodListComponent],
  exports: [AddFoodComponent, FoodListComponent],
  imports: [CommonModule, HttpClientModule, FormsModule],
})
export class SharedModule {}
