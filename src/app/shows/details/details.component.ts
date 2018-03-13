import {Component, OnInit} from '@angular/core';
import {AppAuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-details',
  template: `
    <mat-toolbar>
      <span>Details</span>
      <button *ngIf="auth.isAuthed()" routerLink="edit" mat-button>Edit</button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [`
    mat-list {
      max-width: 600px;
    }
  `]
})
export class DetailsComponent implements OnInit {

  constructor(public auth: AppAuthService) {
  }

  ngOnInit() {
  }

}
