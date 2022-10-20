import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/shared/service/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginSubscription: Subscription
  loginForm!: FormGroup;
  constructor(private loginFormBuilder: FormBuilder, public _authservice: AuthService, private router: Router) {
  }
  get loginControls() {
    return this.loginForm.controls;
  }
  ngOnInit() {
    this.loginForm = this.loginFormBuilder.group({
      username: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }
  ngOnDestroy() {
    this.loginSubscription.unsubscribe()
  }
  loginSubmit() {
    if (this.loginForm.valid) {
      this.loginSubscription=this._authservice.authenticateUser(this.loginForm.value).subscribe({
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


