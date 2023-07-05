
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ROUTE_CONFIG, MENTORS_CONFIG } from '../config/endpoints';

@Injectable({
  providedIn: 'root'
})
export class MentorService {

  constructor(private readonly httpClient: HttpClient) { }
  
  addMentorsList(mentorsPayload: any):Observable<any>{
    return this.httpClient.post('http://localhost:7700/api/mentors/add',mentorsPayload)
  }
}