import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MentorsService } from 'src/app/shared/services/mentors.service';
import { HttpEventType, HttpEvent } from '@angular/common/http';
import { ObservableInput, Subject, takeUntil } from 'rxjs';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-mentors',
  templateUrl: './add-mentors.component.html',
  styleUrls: ['./add-mentors.component.scss'],
})
export class AddMentorsComponent implements OnInit {
 editor = ClassicEditor;
  imageSrc = '';
  fileImage = '';
  mediaLinksForm = new FormGroup({
    instagramId: new FormControl('',Validators.required),
    twitterId: new FormControl('',Validators.required),
    facebookId: new FormControl('',Validators.required)
  });
  addMentorForm = new FormGroup({
    mentorName: new FormControl('',Validators.required),
    mentorMobileNumber: new FormControl('',Validators.required),
    mentorEmailId: new FormControl('',Validators.required),
    mentorDesignation: new FormControl('',Validators.required),
    aboutMentor: new FormControl('',Validators.required),
    linkedlnId: new FormControl('',Validators.required),
    mediaLinks: new FormControl(''),
    currentCompany: new FormControl('',Validators.required),
    previousCompany: new FormControl('',Validators.required),
    photo: new FormControl('',Validators.required),
    others: new FormControl()
  });
  isAddMentor:boolean = false;
  ngUnsubscribe = new Subject();
  constructor(private _mentorService: MentorsService) { }

  ngOnInit(): void { }

  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files) {
      this.fileImage = event.target.files[0];
      this.addMentorForm
        .get('photo')
        .setValue(this.fileImage, { emitModelToViewChange: false });
      reader.onload = (event: any) => {
        this.imageSrc = event.target.result as string;
        this.addMentorForm.patchValue({
          photo: this.fileImage,
        });
      };
    }
  }

  addMentors() {
    this.isAddMentor = true;
    this.addMentorForm.controls.mediaLinks.setValue(
      JSON.stringify(this.mediaLinksForm.value)
    );
    const formData = new FormData();
    formData.append('mentorName', this.addMentorForm.controls.mentorName.value);
    formData.append('mentorMobileNumber', this.addMentorForm.controls.mentorMobileNumber.value);
    formData.append('mentorEmailId', this.addMentorForm.controls.mentorEmailId.value);
    formData.append('mentorDesignation', this.addMentorForm.controls.mentorDesignation.value);
    formData.append('aboutMentor', this.addMentorForm.controls.aboutMentor.value);
    formData.append('linkedlnId', this.addMentorForm.controls.linkedlnId.value);
    formData.append('mediaLinks', this.addMentorForm.controls.mediaLinks.value);
    formData.append('currentCompany', this.addMentorForm.controls.currentCompany.value);
    formData.append('previousCompany', this.addMentorForm.controls.previousCompany.value);
    formData.append('photo', this.fileImage);
    formData.append('others', this.addMentorForm.controls.others.value);
    if (this.fileImage) {
      this._mentorService
        .addMentorsList(formData)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(() => {
          Swal.fire('Good job!', 'Mentor Details added!', 'success');
          this.isAddMentor = false;
        });
    }
  }
}
