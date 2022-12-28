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

  mediaLinksForm = new FormGroup({
    instagramId: new FormControl(),
    twitterId: new FormControl(),
    facebookId: new FormControl(),
    others: new FormControl()
  })

  addMentorForm = new FormGroup({
    mentorName: new FormControl(),
    mobileNumber: new FormControl(),
    emailId: new FormControl(),
    designation: new FormControl(),
    aboutMentor: new FormControl(),
    linkedlnId: new FormControl(),
    mediaLinks:new FormControl(),
    currentCompany: new FormControl(),
    previousCompany: new FormControl(),
    photo: new FormControl()
  });

 
  constructor(private _mentorService: MentorService) {}

  ngOnInit(): void {}
  addMentors() {
    
    this.addMentorForm.controls.mediaLinks.setValue(JSON.stringify(this.mediaLinksForm.value));
    let mentorDetails = this.addMentorForm.value;
    console.log(mentorDetails);
    this._mentorService
      .addMentorsList(mentorDetails)
      .subscribe((postMentorResponse: any) => {
        Swal.fire('Good job!', 'Mentor Details added!', 'success');
        console.log(postMentorResponse);
      });
  }
}
