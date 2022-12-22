import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormControl } from '@angular/forms';
import {MentorService} from 'src/app/shared/services/mentor.service';
@Component({
  selector: 'app-add-mentors',
  templateUrl: './add-mentors.component.html',
  styleUrls: ['./add-mentors.component.scss'],
})
export class AddMentorsComponent implements OnInit {
  addMentorForm = new FormGroup({
    mentorName: new FormControl(),
    mobileNumber: new FormControl(),
    emailId: new FormControl(),
    designation: new FormControl(),
    aboutMentor: new FormControl(),
    linkedlnId: new FormControl(),
    currentCompany: new FormControl(),
    previousCompany: new FormControl(),
    instagramId: new FormControl(),
    twitterId: new FormControl(),
    facebookId: new FormControl(),
    others: new FormControl(),
    photo: new FormControl()
  });
  constructor(private _mentorService: MentorService) {}

  ngOnInit(): void {}
  addMentors() {
    var mentorDetails = {
      mentorName: this.addMentorForm.controls.mentorName.value,
      mentorMobileNumber: this.addMentorForm.controls.mobileNumber.value,
      mentorEmailId: this.addMentorForm.controls.emailId.value,
      mentorDesignation: this.addMentorForm.controls.designation.value,
      aboutMentor: this.addMentorForm.controls.aboutMentor.value,
      linkedlnId: this.addMentorForm.controls.linkedlnId.value,
      currentCompany: this.addMentorForm.controls.currentCompany.value,
      previousCompany: this.addMentorForm.controls.previousCompany.value,
      mediaLinks: 
        this.addMentorForm.controls.instagramId.value +","+
        this.addMentorForm.controls.twitterId.value + "," +
        this.addMentorForm.controls.facebookId.value
      ,
      others: this.addMentorForm.controls.others.value,
      photo:this.addMentorForm.controls.photo.value
    };
    console.log(mentorDetails);

    this._mentorService
      .addMentorsList(mentorDetails)
      .subscribe((postMentorRespose: any) => {
        Swal.fire('Good job!', 'Domain name added!', 'success');
        console.log(postMentorRespose);
      });
  }
}
