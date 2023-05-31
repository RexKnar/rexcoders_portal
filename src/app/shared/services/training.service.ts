import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ROUTE_CONFIG, TRAINING_CONFIG } from '../config/endpoints';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private readonly httpClient: HttpClient) { }

  getTrainingList():Observable<any>{
    return this.httpClient.get(ROUTE_CONFIG.baseUrl + TRAINING_CONFIG.getTrainingListUrl )
  }
  getTrainingDetails():Observable<any>{
    return this.httpClient.get(ROUTE_CONFIG.baseUrl + TRAINING_CONFIG.getTrainingDetailUrl + '1')

  }
  addTrainingDetails(Payload: any): Observable<any> {
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + TRAINING_CONFIG.addButtonUrl,Payload);
  }

  
}
