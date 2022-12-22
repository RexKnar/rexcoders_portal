import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CookiesService } from 'src/app/shared/services/cookies.service';
import { Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();
  loginForm!: FormGroup;
  responsedata: any;
  @Input() userRole: string;
  constructor(
    private loginFormBuilder: FormBuilder,
    public _authservice: AuthService,
    private _cookiesService: CookiesService,
    private _router:Router
  ) {}
  get loginControls() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.loginForm = this.loginFormBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      userType: [null],
    });
  }

  ngOnDestroy() {
<<<<<<< HEAD
    this.destroy$.next(true);
    this.destroy$.complete();
=======
    // this.loginSubscription.unsubscribe()
>>>>>>> a809897428831a30fd86666f918ab78ca762e29b
  }
  loginSubmit() {
    if (this.loginForm.valid) {
      this.loginForm.patchValue({
        userType: this.userRole,
      });
<<<<<<< HEAD
      this._authservice
        .authenticateUser(this.loginForm.value)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (data) => {
            this.responsedata = data.data;
            Swal.fire('Hi ' + this.responsedata?.details?.name + ', Welcome to Rexcoders');
            this.loginForm.reset();
            this._cookiesService.setAuthCookies(this.responsedata,this.userRole);
=======
      this.loginSubscription=this._authservice.authenticateUser(this.loginForm.value).subscribe({
        next: (data) => {
          Swal.fire('Hi '+this.userRole + ', Welcome to Rexcoders');
          this.loginForm.reset();
>>>>>>> a809897428831a30fd86666f918ab78ca762e29b

            this._router.navigate(['/student']);
          },
          error: (err) => {
            Swal.fire('Invalid User');
          },
        });
    }
  }
}
