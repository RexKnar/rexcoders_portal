import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ROUTE_CONFIG, CATEGORY_CONFIG} from '../config/endpoints';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getCategories(domainID: number): Observable<any> {
    return this.httpClient.get(ROUTE_CONFIG.baseUrl + CATEGORY_CONFIG.getCategoryListUrl+ "?domainId=" + domainID);
  }
}
