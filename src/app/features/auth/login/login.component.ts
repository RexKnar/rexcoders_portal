import { Component, OnInit } from '@angular/core';
import { FormGroup,  Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder) {
  }
  get loginControl() {
    return this.loginForm.controls;
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      userId: [null, [Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }
  loginSubmit() {
<<<<<<< Updated upstream
    if (this.login_Form.valid) {
=======
    if (this.loginForm.valid) {
>>>>>>> Stashed changes
      Swal.fire('success');
    }
    else {
      Swal.fire('Invalid User');
    }
  }
}




