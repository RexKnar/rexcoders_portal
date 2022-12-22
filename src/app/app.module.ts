import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import {CookieService} from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';
import { AuthInterceptor } from './shared/Interceptors/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,  
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule

  ],
  providers: [{provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true},CookieService],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
