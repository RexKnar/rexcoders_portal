import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ROUTE_CONFIG, DOMAIN_CONFIG } from '../config/endpoints';
@Injectable({
  providedIn: 'root'
})
export class DomainService {
  constructor(private httpClient: HttpClient) { }
  
  getDomain(): Observable<any> {
    return this.httpClient.get(ROUTE_CONFIG.baseUrl + DOMAIN_CONFIG.getDomainListUrl);
  }

  deleteDomain(domainID: number): Observable<any> {
    return this.httpClient.delete(ROUTE_CONFIG.baseUrl + DOMAIN_CONFIG.deleteDomainUrl + "?domainId=" + domainID);
  }


  insertDomain(domainPayload: any): Observable<any> {
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + DOMAIN_CONFIG.addDomainUrl, domainPayload);
  }

  updateDomain(domainPayload: any): Observable<any> {
    return this.httpClient.put(ROUTE_CONFIG.baseUrl + DOMAIN_CONFIG.updateDomainUrl, domainPayload);
  }
}
