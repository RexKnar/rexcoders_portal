import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ROUTE_CONFIG, MENTORS_CONFIG } from '../config/endpoints';

@Injectable({
  providedIn: 'root'
})
export class MentorsService {

  constructor(private readonly httpClient: HttpClient) { }
  
  addMentorsList(mentorsPayload: any):Observable<any>{
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + MENTORS_CONFIG.addMentorsUrl,mentorsPayload)
  }
}
