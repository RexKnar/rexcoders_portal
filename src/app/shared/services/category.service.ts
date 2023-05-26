import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CATEGORY_CONFIG, ROUTE_CONFIG, } from '../config/endpoints';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  
  
  constructor(public httpClient:HttpClient) {  }
  getCategory(domainId:any): Observable<any> {
    return this.httpClient.get(ROUTE_CONFIG.baseUrl + CATEGORY_CONFIG .getCategoryListUrl+"?domainId="+parseInt(domainId));
  }
  addCategory(payLoad:any):Observable<any>{
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + CATEGORY_CONFIG.addCategoryUrl,payLoad )
  }

  getAllCategory(){
    return this.httpClient.get(ROUTE_CONFIG.baseUrl + CATEGORY_CONFIG.getAllCategoryUrl)
  }
}

