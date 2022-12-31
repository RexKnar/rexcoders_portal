import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MENTOR_CONFIG, ROUTE_CONFIG } from '../config/endpoints';

@Injectable({
  providedIn: 'root'
})
export class MentorsService {

  constructor(private httpClient: HttpClient) { }

  getMentorList(): Observable<any> {

    return this.httpClient.get(ROUTE_CONFIG.baseUrl + MENTOR_CONFIG. getMentorListUrl);

  }

  getMentorDetails(mentorID: number): Observable<any> {

    return this.httpClient.get(ROUTE_CONFIG.baseUrl + MENTOR_CONFIG.getMentorDetailsUrl+"?mentorId=" + mentorID);

  }








}
