import { Component } from '@angular/core';
import {AppAuthService} from './auth/auth.service';
import {NavigationStart, Router} from '@angular/router';
import { LogUpdateService } from './services/log-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  auth;
  constructor(public authService: AppAuthService, public router: Router, private logUpdate: LogUpdateService) {
    this.auth = authService;
    this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationStart) { console.log(e); }
    });
  }

  toggleLogin() {
    if (this.auth.isAuthed()) {
      this.auth.logout();
    } else {
      this.auth.login();
    }
  }
}
