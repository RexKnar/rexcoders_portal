import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public newUser = false;
  // public user: firebase.User;
  loginForm!: FormGroup;
  submitted = false;
  
  public formErrors: {email:any,password:any} = {
    'email': '',
    'password': '',
  };
  public errorMessage: any;

  
  constructor( private fb: FormBuilder,
    private router: Router) {
   

  }
  get fval() {
   return this.loginForm.controls;
    }
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
    
  }

  loginSubmit() {
   

   if (this.loginForm.invalid) {
    this.submitted = true;
 
    Swal.fire('Invalid User');
    }
    else{
      
      Swal.fire('success');

   
    }
   }

    }
  

  

