import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/shared/service/training.service';

@Component({
  selector: 'app-student-course-list',
  templateUrl: './student-course-list.component.html',
  styleUrls: ['./student-course-list.component.scss']
})
export class StudentCourseListComponent implements OnInit {

  trainingList : any;

  constructor(public trainingservice : TrainingService) { }

  ngOnInit(): void {
    this.training();
  }

  training(){
  this.trainingservice.getTrainingList().subscribe((trainingData: any) => {
              if (trainingData?.rows?.length) {

               this.trainingList = trainingData.rows;
              }
           });

 }

}
