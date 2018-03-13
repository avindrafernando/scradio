import {Component, OnInit} from '@angular/core';
import {AppAuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-details',
  template: `
    <mat-toolbar>
        <span>Details</span>
      <button *ngIf="auth.isAuthed()" mat-button>Edit</button>
    </mat-toolbar>
    <app-view-details></app-view-details>
  `,
  styles: [`
    mat-list {
      max-width: 600px;
    }
  `]
})
export class DetailsComponent implements OnInit {

  constructor(public auth: AppAuthService) { }

  ngOnInit() {
  }

}
