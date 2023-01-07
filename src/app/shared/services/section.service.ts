import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ROUTE_CONFIG, SYLLABUS_CONFIG } from '../config/endpoints';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private httpClient: HttpClient) { }

  getSection(moduleId: number): Observable<any> {
    return this.httpClient.get(ROUTE_CONFIG.baseUrl + SYLLABUS_CONFIG.sectionListUrl + "?moduleId=" + moduleId);
  }

  addSection(sectionPayload: any): Observable<any> {
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + SYLLABUS_CONFIG.addSectionUrl, sectionPayload);
  }

  updateSection(sectionPayload: any): Observable<any> {
    return this.httpClient.put(ROUTE_CONFIG.baseUrl + SYLLABUS_CONFIG.updateSectionUrl, sectionPayload);
  }

  deleteSection(sectionId: number): Observable<any> {
    return this.httpClient.delete(ROUTE_CONFIG.baseUrl + SYLLABUS_CONFIG.deleteSectionUrl + "?sectionId=" + sectionId);
  }
}
