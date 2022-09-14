import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login_Form!: FormGroup;
  constructor(private fb: FormBuilder,
    private router: Router) {
  }
  get login_control() {
    return this.login_Form.controls;
  }
  ngOnInit() {
    this.login_Form = this.fb.group({
      user_id: [null, [Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }
  login_Submit() {
    if (this.login_Form.valid) {
      Swal.fire('success');
    }
    else {
      Swal.fire('Invalid User');
    }
  }
}




