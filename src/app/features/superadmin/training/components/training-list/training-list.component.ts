import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingService } from 'src/app/shared/services/training.service';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.scss']
})
export class TrainingListComponent implements OnInit {

  constructor(public _trainingService: TrainingService, private router:Router) { }

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
  getId(){
    this.router.navigateByUrl('admin/training/training-details')
  }
}
