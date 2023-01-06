import { Injectable } from '@angular/core';
import {HttpRequest,HttpHeaders,HttpHandler,HttpEvent,HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookiesService } from '../services/cookies.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  public authReq: any;
  constructor(private CookiesService: CookiesService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let tokenData:any = this.CookiesService.getAuthCookies();
    console.log(tokenData);
    let newHeaders = request.headers;
    newHeaders = newHeaders.append('Access-Control-Allow-Origin', '*');
    if(tokenData) {
    this.authReq = request.clone({
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Access-Control-Allow-Origin' : '*',
          'Authorization': "Bearer " +tokenData.token,
        }),
      });

    } else {
        this.authReq = request.clone({
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Access-Control-Allow-Origin' : '*',
            }),
          });
    }

    return next.handle(this.authReq);

}
}
