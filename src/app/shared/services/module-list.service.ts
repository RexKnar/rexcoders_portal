import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MODULE_CONFIG, ROUTE_CONFIG } from '../config/endpoints';

@Injectable({
  providedIn: 'root'
})
export class ModuleListService {

  constructor(private httpClient: HttpClient) { }

  getModule(trainingId:any): Observable<any> {
    return this.httpClient.get(ROUTE_CONFIG.baseUrl + MODULE_CONFIG.getModuleListUrl+'?trainingId='+trainingId);
  }
  addModule(modulePayload :any) :Observable<any>{
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + MODULE_CONFIG.postModuleListUrl,modulePayload);
  }
  updateModule(modulePayload:any) :Observable<any>{
    return this.httpClient.put(ROUTE_CONFIG.baseUrl + MODULE_CONFIG.putModuleListUrl,modulePayload);
  } 
}