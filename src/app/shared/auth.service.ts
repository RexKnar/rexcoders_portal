import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public httpClient: HttpClient) { 
  }
  loginadmin='https://api.rexcoders.in/api/auth/login';
 
  postlogin(data:any):Observable<any>
  {
     return this.httpClient.post(`${this.loginadmin}`,data);
  }
  
}
