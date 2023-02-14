import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './shared/pages/account/account.component';
import { CanActivateGuard } from './shared/guards/can-activate.guard';
import { CanDeactivateGuard } from './shared/guards/can-deactivate.guard';
import { HomeComponent } from './shared/pages/home/home.component';
import { CanLoadGuard } from './shared/guards/can-load.guard';
import { CanActivateChildGuard } from './shared/guards/can-activate-child.guard';

const routes: Routes = [
  { component: HomeComponent, path: '' },
  {
    canActivate: [CanActivateGuard],
    canDeactivate: [CanDeactivateGuard],
    component: AccountComponent,
    path: 'account',
  },
  {
    canActivateChild: [CanActivateChildGuard],
    canLoad: [CanLoadGuard],
    loadChildren: () =>
      import('./core/core.module').then(({ CoreModule }) => CoreModule),
    path: 'core',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
