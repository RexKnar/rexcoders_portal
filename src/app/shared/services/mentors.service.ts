import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MENTOR_CONFIG, ROUTE_CONFIG } from '../config/endpoints';

@Injectable({
  providedIn: 'root'
})
export class MentorsService {

  constructor(private httpClient: HttpClient) { }

  getMentor(): Observable<any> {
    return this.httpClient.get(ROUTE_CONFIG.baseUrl + MENTOR_CONFIG. getAllMentorListUrl);
  }
  getMentors(): Observable<any> {
    return this.httpClient.get(ROUTE_CONFIG.baseUrl + MENTOR_CONFIG. getMentorListUrl);
  }

  insertMentor(mentorPayload: any): Observable<any> {
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + MENTOR_CONFIG.addMentorUrl, mentorPayload);
  }
}
