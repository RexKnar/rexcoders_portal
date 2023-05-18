import { Component, OnInit } from '@angular/core';
import { MentorsService } from 'src/app/shared/services/mentors.service';

@Component({
  selector: 'app-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.scss']
})
export class MentorListComponent implements OnInit {


  mentorData: any;
  mentorlist: any;


  constructor(private _mentorService: MentorsService) { }

  ngOnInit(): void {
      this.getMentorsList()
  }

  getMentorsList() {
      this._mentorService.getMentorList().subscribe((getMentorResponse: any) => {
      this.mentorlist = getMentorResponse;
      this.mentorData = this.mentorlist;
     });
     }












}
