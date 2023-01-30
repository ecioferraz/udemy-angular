import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-add-food></app-add-food>
  <app-food-list></app-food-list>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
