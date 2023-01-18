import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-structural></app-structural>
    <app-attribute>
      <h1>Attribute Directives Lessons</h1>
      <hr />
    </app-attribute>
    <app-attribute></app-attribute>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
