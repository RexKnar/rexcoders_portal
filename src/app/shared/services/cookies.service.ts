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
setAuthCookies(authData:any,currentUserRole:string): void
{
    this.cookieService.set('_rcusr',JSON.stringify(authData));
    this.cookieService.set('_cur',currentUserRole);
    console.log(authData);
    console.log(currentUserRole);

}
getAuthCookies()
{

let tokenData = this.cookieService.get('_rcusr')  ? JSON.parse(this.cookieService.get('_rcusr'))  : null;

    return tokenData;

}

getUserDetail()
{
    let userDetails:{token?:string, userDetails?:any, role?:string}={};
    const tokenData = JSON.parse(this.cookieService.get('_rcusr'));
    if(tokenData)
    {
        userDetails.token=tokenData?.token;
        userDetails.userDetails=tokenData.details;
    }
    else{
        userDetails.token=null;
    }

    userDetails.role=this.cookieService.get('_cur');
    return userDetails;
}


}

