import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ROUTE_CONFIG, CATEGORY_CONFIG  } from '../config/endpoints';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpclient:HttpClient) { }
  getCategory(domainId:any): Observable<any> {
    return this.httpclient.get(ROUTE_CONFIG.baseUrl + CATEGORY_CONFIG .getCategoryListUrl+"?domainId="+parseInt(domainId));
  }
}
