import { Component, OnInit } from '@angular/core';
import { MentorsService } from 'src/app/shared/services/mentors.service';

@Component({
  selector: 'app-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.scss']
})
export class MentorListComponent implements OnInit {

  isAddMentor: boolean;
  isEditMentor: boolean;
  mentorData: any;
  mentorlist: any;
  closemodal: any;
  mentorDetails:any;

  constructor(private _mentorService: MentorsService) { }

  ngOnInit(): void {
      this.getMentors()
  }

  getMentors() {
      this._mentorService.getMentorList().subscribe((getMentorResponse: any) => {
      this.mentorlist = getMentorResponse;
      this.mentorData = this.mentorlist;
     });
     }












}
