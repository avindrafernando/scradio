import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {CanActivate} from '@angular/router';
import {AppAuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AppAuthService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.isAuthed()) {
      console.log('User Authenticated');
      return true;
    } else {
      this.router.navigate(['']);
      console.log('Access denied to this page');
      return false;
    }
  }
}
