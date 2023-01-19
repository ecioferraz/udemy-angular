import { Component } from '@angular/core';

type Item = { age: number, name: string };

@Component({
  selector: 'app-root',
  template: `
    <app-input [count]="count"></app-input>
    <button (click)="decrement()">-</button>
    <button (click)="increment()">+</button>
    <ng-template [ngIf]="getItem"]>
      <h1>{{getItem.name}}</h1>
      <h2>{{getItem.age}}</h2>
    </ng-template>
    <app-output (sendItem)=setItem($event)></app-output>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  public count = 0;
  public getItem!: Item;

  public decrement() {
    this.count -= 1;
  }

  public increment() {
    this.count += 1;
  }

  public setItem(item: Item) {
    this.getItem = item;
  }
}
