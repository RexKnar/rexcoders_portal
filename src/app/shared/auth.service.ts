import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AUTH_CONFIG, ROUTE_CONFIG} from './config/endpoints';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public httpClient: HttpClient) { 
  }
  
  loginapi(loginPayload:any):Observable<any>
  {
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + AUTH_CONFIG.loginUrl,loginPayload);
  }
 
  
}
