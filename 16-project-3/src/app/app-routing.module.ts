import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {
    loadChildren: () =>
      import('./core/components/auth/auth.module').then(
        ({ AuthModule }) => AuthModule,
      ),
    path: '',
  },
  {
    canActivateChild: [AuthGuard],
    loadChildren: () =>
      import('./components/admin/admin.module').then(
        ({ AdminModule }) => AdminModule,
      ),
    path: 'admin',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
