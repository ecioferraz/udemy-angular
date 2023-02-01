import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    children: [{ component: AboutComponent, path: ':id/:username' }],
    component: AboutComponent,
    path: 'about',
  },
  { component: HomeComponent, path: '', pathMatch: 'full' },
  {
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(
        (module) => module.DashboardModule,
      ),
    path: 'dashboard',
  },
  { component: NotFoundComponent, path: 'not-found' },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
