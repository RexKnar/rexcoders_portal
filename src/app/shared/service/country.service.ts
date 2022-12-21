import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { COUNTRY_CONFIG, ROUTE_CONFIG } from '../config/endpoints';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) { }


  getCountry():Observable<any>{
    return this.httpClient.get(ROUTE_CONFIG.baseUrl + COUNTRY_CONFIG.getCountryListUrl)
  }
}
