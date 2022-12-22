import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {
   
    constructor(
        private cookieService: CookieService)
    {
      
    }
setAuthCookies(authData:any): void 
{
    this.cookieService.set('cookie',JSON.stringify(authData));
    
}
getAuthCookies()
{
    const tokenData = JSON.parse(this.cookieService.get('cookie'));
    return tokenData == null ? null : tokenData;
     
}

}

