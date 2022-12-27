import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CookiesService } from 'src/app/shared/services/cookies.service';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor(private _cookieService: CookiesService, private router: Router) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        let user = this._cookieService.getAuthCookies();
        
        if (!user) {
            Swal.fire({
                icon: 'error',
                title: 'Warning',
                text: 'You are not allowed to access this URL!'
              });
            this.router.navigate(['/'])
        }
        return true;
    }
}