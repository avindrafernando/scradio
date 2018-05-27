import { Component } from '@angular/core';
import {AppAuthService} from './auth/auth.service';
import {NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  auth;
  constructor(public authService: AppAuthService, public router: Router) {
    this.auth = authService;
    this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationStart) { console.log(e); }
    });
  }

  toggleLogin() {
    console.log(this.auth.isAuthed());
    if (this.auth.isAuthed()) {
      this.auth.logout();
    } else {
      this.auth.login();
    }
  }
}
