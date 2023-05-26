import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/shared/services/training.service';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.scss']
})
export class TrainingDetailsComponent implements OnInit {

  constructor( private traningService:TrainingService) { }
trainingDetails:any
  ngOnInit(): void {
    this.traningService.getTrainingDetails().subscribe(trainingDetails=>{
      console.log(trainingDetails);
      this.trainingDetails=trainingDetails;
    })
  }

}
