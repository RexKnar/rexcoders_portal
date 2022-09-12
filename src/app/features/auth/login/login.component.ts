import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public newUser = false;
  // public user: firebase.User;
  public loginForm: FormGroup;
  public formErrors: {email:any,password:any} = {
    'email': '',
    'password': '',
  };
  public errorMessage: any;
  

  constructor( private fb: FormBuilder,
    private router: Router) {
    this.loginForm = fb.group({
      email: ['test@gmail.com', [Validators.required, Validators.email]],
      password: ['test123', Validators.required]
    });
  }

  ngOnInit() {
  }

  userLogin() {
    

    };
    logout() {
     
    }


}
