import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import FoodList from '../module/food-list';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {
  public foodList: (FoodList & { price: string })[] = [
    { id: 1, name: 'Hamburger', price: 'R$ 15,00' },
    { id: 2, name: 'French Fries', price: 'R$ 8,00' },
    { id: 3, name: 'Milkshake', price: 'R$ 9,00' },
  ];

  public handleSubmit(form: NgForm) {
    if (form.valid) console.log(form.value);
  }
}
