import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/pages/components/about/about.component';
import { HomeComponent } from './core/pages/components/home/home.component';

const routes: Routes = [
  { component: HomeComponent, path: '' },
  { component: AboutComponent, path: 'about' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
