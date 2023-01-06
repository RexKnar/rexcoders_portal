import { Component, Input, OnInit } from '@angular/core';
import { CourseCardDetails } from '../../model/course.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-training-card',
  templateUrl: './training-card.component.html',
  styleUrls: ['./training-card.component.scss']
})
export class TrainingCardComponent implements OnInit {

  statusToggle: boolean = true;

  @Input() cardDetails : CourseCardDetails;

  environment=environment;
  domainName:any="hhjhjghj";
userRole:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  toggleDisplayDiv() {
    this.statusToggle = !this.statusToggle;
  }
}


