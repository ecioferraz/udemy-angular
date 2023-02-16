import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';

@Component({
  imports: [CommonModule, RouterModule, HeaderComponent],
  selector: 'app-root',
  standalone: true,
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
