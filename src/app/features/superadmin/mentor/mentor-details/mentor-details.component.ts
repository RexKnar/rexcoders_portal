import { Component, OnInit } from '@angular/core';
import { MentorsService } from 'src/app/shared/services/mentors.service';
import { ActivatedRoute, Params} from '@angular/router';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-mentor-details',
  templateUrl: './mentor-details.component.html',
  styleUrls: ['./mentor-details.component.scss']
})
export class MentorDetailsComponent implements OnInit {
  environment=environment;
  mentorDetails:any;
  mentorId:number;
  mentorData:any;

constructor(private _mentorService: MentorsService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe((params: Params) => {

      this.mentorId=params['mentors'];
      this.getMentorsDetail();
    });
}

  getMentorsDetail() {

        this._mentorService.getMentorDetails(this.mentorId).subscribe((getMentorResponse: any) => {
        this.mentorDetails=getMentorResponse;
        this.mentorData=this.mentorDetails.data;


       });
       }

  }




