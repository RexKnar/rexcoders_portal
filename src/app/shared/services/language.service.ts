import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ROUTE_CONFIG, LANGUAGE_CONFIG } from '../config/endpoints';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor(private httpClient:HttpClient) { }
  getLanguage(): Observable<any> {
    return this.httpClient.get(ROUTE_CONFIG.baseUrl + LANGUAGE_CONFIG. getLanguageListUrl);
  }
}
