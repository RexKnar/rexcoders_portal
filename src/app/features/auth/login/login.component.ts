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
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  loginSubmit() {
    if (this.loginForm.valid) {
      this.loginForm.patchValue({
        userType: this.userRole,
      });

      console.log(this.loginForm.value);

      this._authservice
        .authenticateUser(this.loginForm.value)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (data) => {
            this.responsedata = data.data;
            Swal.fire('Hi ' + this.responsedata?.details?.name + ', Welcome to Rexcoders');
            this.loginForm.reset();
            this._cookiesService.setAuthCookies(this.responsedata,this.userRole);
            this._router.navigate(['/student']);
          },
          error: (err) => {
            console.log(err);
            Swal.fire('Invalid User');
            console.log(err);
          },
        });
    }
  }
}
