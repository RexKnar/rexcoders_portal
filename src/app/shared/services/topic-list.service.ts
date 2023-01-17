import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MODULE_CONFIG, ROUTE_CONFIG } from '../config/endpoints';
@Injectable({
  providedIn: 'root'
})
export class TopicListService {

  constructor(http:HttpClient) { }
}
