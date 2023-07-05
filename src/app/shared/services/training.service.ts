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
<<<<<<< HEAD

  addTrainingDetail(addTrainingPayload:any):Observable<any>{
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + TRAINING_CONFIG.addTrainingDetailsUrl, addTrainingPayload , 
      {
      headers: {'Content-Type': undefined}
  });
  }
=======
  getTrainingDetails():Observable<any>{
    return this.httpClient.get(ROUTE_CONFIG.baseUrl + TRAINING_CONFIG.getTrainingDetailUrl + '1')

  }

  
>>>>>>> a4ac9158008532b26007a965863c4d2247734248
}
