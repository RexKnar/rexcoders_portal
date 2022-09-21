import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private loginFormBuilder: FormBuilder, public _authservice: AuthService, private router: Router) {
  }
  get loginControl() {
    return this.loginForm.controls;
  }
  ngOnInit() {
    this.loginForm = this.loginFormBuilder.group({
      username: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }
  loginSubmit() {
    if (this.loginForm.valid) {
      this._authservice.loginapi(this.loginForm.value).subscribe({
        next: (data) => {
          Swal.fire('Welcome to Rexcoders');
        },
        error: (err) => { 
          Swal.fire('Invalid User'); 
        }
      });
    }
  }
}


