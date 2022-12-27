import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  formData: { userEmail: string } = { userEmail: '' };
  toggleForgotPasswordForm:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }
  getForgotFormData(form: any) {
    this.toggleForgotPasswordForm=false;
  }
}
