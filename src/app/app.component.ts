import { Component } from '@angular/core';
import {AppAuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <mat-sidenav-container>
      <mat-sidenav #sidenav mode="side" opened="true">
        <a mat-icon-button routerLink="">
          <mat-icon>home</mat-icon>
        </a>
        <a mat-icon-button routerLink="shows">
          <mat-icon>slideshow</mat-icon>
        </a>
      </mat-sidenav>
      <mat-sidenav-content>
        <mat-toolbar color="primary">
          <span>Radio App</span>
          <button mat-button (click)="toggleLogin()">Log {{auth.isAuthed() ? 'Off' : 'In'}}!</button>
        </mat-toolbar>
        <div class="main-content">
          <router-outlet></router-outlet>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [`
    .main-content {
      padding: 20px;
    }
    a {
      display: block;
    }
  `]
})
export class AppComponent {
  auth;
  constructor(public authService: AppAuthService) {
    this.auth = authService;
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
