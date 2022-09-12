import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/theme/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/theme/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'auth',
    pathMatch:'full'
  },
  {
    path:'auth',
    component:AuthLayoutComponent,
    loadChildren: () => import('./features/auth/auth.module').then(module => module.AuthModule),
  },
  {
    path:'admin',
    component: AdminLayoutComponent,
    loadChildren: () => import('./features/auth/auth.module').then(module => module.AuthModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
