import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TrainingService } from 'src/app/shared/services/training.service';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.scss']
})
export class TrainingListComponent implements OnInit {

  constructor(public _trainingService: TrainingService) { }

  trainingList:any;

  ngOnInit(): void {
    this.getTrainingList();
   
  }

  

  getTrainingList()
  {
    this._trainingService.getTrainingList().subscribe({
      next:(trainingListResponse:any)=>{
        this.trainingList=trainingListResponse.rows;
        console.log(trainingListResponse);
      }
      
    });
  }
}
