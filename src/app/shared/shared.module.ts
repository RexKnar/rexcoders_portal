import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './theme/sidebar/sidebar.component';
import { AdminLayoutComponent } from './theme/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './theme/auth-layout/auth-layout.component';
import { FooterComponent } from './theme/footer/footer.component';
import { HeaderComponent } from './theme/header/header.component';
import {CookieService} from 'ngx-cookie-service';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    FooterComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  
  exports: [
  ],

})
export class SharedModule { }

