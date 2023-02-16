import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/components/about/about.component';
import { HomeComponent } from './pages/components/home/home.component';

const routes: Routes = [
  { component: HomeComponent, path: '', title: 'Home' },
  { component: AboutComponent, path: 'about', title: 'About' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
