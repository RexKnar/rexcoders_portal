import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MODULE_CONFIG, ROUTE_CONFIG } from '../config/endpoints';

@Injectable({
  providedIn: 'root'
})
export class ModuleListService {

  constructor(private httpClient: HttpClient) { }

  getModule(): Observable<any> {
    return this.httpClient.get(ROUTE_CONFIG.baseUrl + MODULE_CONFIG.getModuleListUrl);
  }
  addModule(modulePayload :any) :Observable<any>{
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + MODULE_CONFIG.postModuleListUrl,modulePayload);
  }
}
  