import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormControl } from '@angular/forms';
import { MentorService } from 'src/app/shared/services/mentor.service';
import { HttpEventType, HttpEvent } from '@angular/common/http';
import { ObservableInput, Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-add-mentors',
  templateUrl: './add-mentors.component.html',
  styleUrls: ['./add-mentors.component.scss'],
})
export class AddMentorsComponent implements OnInit {
  imageSrc = '';
  fileImage = '';
  mediaLinksForm = new FormGroup({
    instagramId: new FormControl(),
    twitterId: new FormControl(),
    facebookId: new FormControl(),
    others: new FormControl(),
  });

  addMentorForm = new FormGroup({
    mentorName: new FormControl(),
    mobileNumber: new FormControl(),
    emailId: new FormControl(),
    designation: new FormControl(),
    aboutMentor: new FormControl(),
    linkedlnId: new FormControl(),
    mediaLinks: new FormControl(),
    currentCompany: new FormControl(),
    previousCompany: new FormControl(),
    photo: new FormControl(),
  });
  progress: number;
  ishide: boolean;
  uploader: any;
  ngUnsubscribe = new Subject();
  addClass: any;

  constructor(private _mentorService: MentorService) {}

  ngOnInit(): void {}

  // onSelectFile(event: any) {
  //   if (event.target.files && event.target.files[0]) {
  //     var reader = new FileReader();

  //     reader.readAsDataURL(event.target.files[0]); // read file as data url

  //     reader.onload = (event: any) => {
  //       // called once readAsDataURL is completed
  //       this.imageSrc = event.target.result;
  //       this.addMentorForm.patchValue({
  //         photo: this.fileImage,
  //       });
  //     };
  //   }
  // }

  // addMentors() {
  //   this.addMentorForm.controls.mediaLinks.setValue(
  //     JSON.stringify(this.mediaLinksForm.value)
  //   );
  //   let mentorDetails = this.addMentorForm.value;
  //   console.log(mentorDetails);
  //   // this._mentorService
  //   //   .addMentorsList(mentorDetails)
  //   //   .subscribe((postMentorResponse: any) => {
  //   //     Swal.fire('Good job!', 'Mentor Details added!', 'success');
  //   //     console.log(postMentorResponse);
  //   //   });
  // }

  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files) {
      this.fileImage = event.target.files[0];
      this.addMentorForm
        .get('photo')
        .setValue(this.fileImage, { emitModelToViewChange: false });
      console.log(this.fileImage);
      reader.onload = () => {
        this.imageSrc = event.target.result as string;
        this.addMentorForm.patchValue({
          photo: this.fileImage,
        });
      };
    }
    console.log(this.addMentorForm.value);
  }

  submit() {
    this.addMentorForm.controls.mediaLinks.setValue(
      JSON.stringify(this.mediaLinksForm.value)
    );
    const formData = new FormData();
            formData.append('mentorName',  this.addMentorForm.controls.mentorName.value);
            formData.append('mobileNumber', this.addMentorForm.controls.mobileNumber.value);
            formData.append('emailId', this.addMentorForm.controls.emailId.value);
            formData.append('designation', this.addMentorForm.controls.designation.value);
            formData.append('aboutMentor', this.addMentorForm.controls.aboutMentor.value);
            formData.append('linkedlnId', this.addMentorForm.controls.linkedlnId.value);
            formData.append('mediaLinks', this.addMentorForm.controls.mediaLinks.value);
            formData.append('currentCompany', this.addMentorForm.controls.currentCompany.value);
            formData.append('previousCompany', this.addMentorForm.controls.previousCompany.value);
            formData.append('photo', this.fileImage);
              console.log(formData);
    if (!this.fileImage) {
      this.ImagevalidationAlert();
    } else {
      this.progress = 0;
      this.ishide = false;

      this._mentorService
        .addMentorsList(formData)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Sent:
              console.log('Request has been made!');
              break;
            case HttpEventType.ResponseHeader:
              console.log('Response header has been received!');
              break;
            case HttpEventType.UploadProgress:
              var eventTotal = event.total ? event.total : 0;
              this.progress = Math.round((event.loaded / eventTotal) * 100);
              console.log('Uploaded! ${ this.progress } %');
              break;
            case HttpEventType.Response:
              console.log('Image Upload Successfully!', event.body);
              console.log(event.body.data.url);
              this.imageSrc = event.body.data.url;
              this.addClass.imageUrl = this.imageSrc;
              setTimeout(() => {
                this.ishide = true;
                this.ImageUploadSuccess();
              }, 1500);
          }
        });
    }
  }
  ImageUploadSuccess() {
    throw new Error('Method not implemented.');
  }
  ImagevalidationAlert() {
    throw new Error('Method not implemented.');
  }
}
