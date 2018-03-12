import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <mat-list>
      <h3 mat-subheader>Folders</h3>
      <mat-list-item *ngFor="let show of shows">
        <mat-icon mat-list-icon>folder</mat-icon>
        <h4 mat-line>{{show.name}}</h4>
        <p mat-line> {{show.aired | date}} </p>
      </mat-list-item>
    </mat-list>
  `,
  styles: []
})
export class ListComponent implements OnInit {
  shows = [{
    aired: new Date(),
    name: 'The Not So Real Deal'
  }, {
    aired: new Date(),
    name: 'The Real Deal'
  }, {
    aired: new Date(),
    name: 'The Deal'
  }];
  constructor() { }

  ngOnInit() {
  }

}
