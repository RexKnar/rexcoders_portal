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

  constructor(private _mentorService: MentorsService) { }

  ngOnInit(): void {
    this.getMentors()
  }
  resetAddModal(){

  }

  getMentors() {
  this._mentorService.getMentor().subscribe((getMentorResponse: any) => {
  this.mentorlist = getMentorResponse;
  this.mentorData = this.mentorlist;
});
 }

 getMentorDetails(){
  this._mentorService.getMentors().subscribe({
    next:(data:any)=>{
      console.log(data);
    }
  })
 }
  updateMentor(){}
  insertMentor(){}


  deleteMentor(data:any){}
  sendMentor(datas:any){}


}
