import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
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
  showProgressBar: boolean = false;
  loginForm!: FormGroup;
  responsedata: any;
  @Input() userRole: string;
  @Output() isLoginSuccess = new EventEmitter<boolean>;
  constructor(
    private loginFormBuilder: FormBuilder,
    public _authservice: AuthService,
    private _cookiesService: CookiesService,
    private _router: Router
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
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  loginSubmit() {
    if (this.loginForm.valid) {
      this.loginForm.patchValue({
        userType: this.userRole,
      });
      this.isLoginSuccess.emit(true);

      setTimeout(() => {
        this._authservice
          .authenticateUser(this.loginForm.value)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (data) => {
              this.responsedata = data.data;
              this.isLoginSuccess.emit(false);
              Swal.fire(
                'Hi ' +
                  this.responsedata?.details?.name +
                  ', Welcome to Rexcoders'
              );
              this.loginForm.reset();
              this._cookiesService.setAuthCookies(
                this.responsedata,
                this.userRole
              );
              if (this.userRole == 'Student') {
                this._router.navigate(['/student']);
              } else if (this.userRole == 'Admin') {
                this._router.navigate(['/admin']);
              }
            },
            error: (err) => {
              console.log(err);
              this.isLoginSuccess.emit(false);
              Swal.fire('Invalid User');
              
              console.log(err);
            },
          });
      }, 2000);
    }
  }
}
