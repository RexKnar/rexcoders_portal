import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private loginFormBuilder: FormBuilder,
    private router: Router) {
  }
  get login_control() {
    return this.loginForm.controls;
  }
  ngOnInit() {
    this.loginForm = this.loginFormBuilder.group({
      userId: [null, [Validators.required, Validators.email],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }
  loginSubmit() {
    if (this.loginForm.valid) {
      Swal.fire('success');
    }
    else {
      Swal.fire('Invalid User');
    }
  }
}




