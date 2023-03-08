import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent {
  public name = 'Écio';
  public age = 31;
  public plusOne = this.age + 1;
  public disabled = true;

  public imgSrc = 'https://source.unsplash.com/random/100x100?=1';
  public imgTitle = 'Random image';

  public position = { x: 0, y: 0 };

  public infoAlert(value: MouseEvent) {
    console.log(value);
  }

  public onMouseMove(value: MouseEvent) {
    this.position.x = value.offsetX;
    this.position.y = value.offsetY;
  }
}
