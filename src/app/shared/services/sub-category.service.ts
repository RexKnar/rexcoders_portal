import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ROUTE_CONFIG, SUBCATEGORY_CONFIG} from '../config/endpoints';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  constructor(private httpClient:HttpClient) { }
  getSubCategory(categoryId:any): Observable<any> {
    return this.httpClient.get(ROUTE_CONFIG.baseUrl + SUBCATEGORY_CONFIG.getSubCategoryListUrl+"?categoryId="+parseInt(categoryId));
  }
}
