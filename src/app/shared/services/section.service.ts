import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ROUTE_CONFIG, SYLLABUS_CONFIG } from '../config/endpoints';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private httpClient: HttpClient) { }

  getSection(): Observable<any> {
  return this.httpClient.get(ROUTE_CONFIG.baseUrl + SYLLABUS_CONFIG.sectionListUrl);
  }

  addSection(sectionPayload : any): Observable<any> {
  return this.httpClient.post(ROUTE_CONFIG.baseUrl + SYLLABUS_CONFIG.addSectionUrl,sectionPayload);
  }
}
