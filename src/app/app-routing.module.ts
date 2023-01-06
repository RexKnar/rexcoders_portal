import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/guard/auth.guard';
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
    loadChildren: () => import('./features/superadmin/superadmin.module').then(module => module.SuperadminModule)
  },
  {
    path:'student',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/student/student.module').then(module => module.StudentModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
