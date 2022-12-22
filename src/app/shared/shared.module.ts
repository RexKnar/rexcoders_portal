import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './theme/sidebar/sidebar.component';
import { AdminLayoutComponent } from './theme/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './theme/auth-layout/auth-layout.component';
import { FooterComponent } from './theme/footer/footer.component';
import { HeaderComponent } from './theme/header/header.component';
import { TrainingCardComponent } from './components/training-card/training-card.component';


<<<<<<< HEAD





=======
>>>>>>> c4162bab93e7a6b541ffc30941fb888b8ffa839b
@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    FooterComponent,
    TrainingCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],

  exports: [
    HeaderComponent,
    SidebarComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    FooterComponent,
    TrainingCardComponent,


  ],

})
export class SharedModule { }

