import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  formData: { userEmail: string } = { userEmail: '' };

  constructor() { }

  ngOnInit(): void {
  }
  getForgotFormData(form: any) {
    console.log(form.value);
  }
}
