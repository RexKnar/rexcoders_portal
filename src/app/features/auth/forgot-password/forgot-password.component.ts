import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  formData:{umail:string}={umail:''};

  constructor() { }

  ngOnInit(): void {
  }
  getFormData(form:any){
console.log("form submitted");
console.log(form.value);
  }
}
