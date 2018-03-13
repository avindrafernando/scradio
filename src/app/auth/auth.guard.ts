import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {CanActivate} from '@angular/router';
import {AppAuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AppAuthService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.isAuthed()) {
      console.log('User Authenticated');
      return true;
    } else {
      console.log('Access denied to this page');
      return false;
    }
  }
}
