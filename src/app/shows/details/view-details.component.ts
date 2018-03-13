import { Component, OnInit } from '@angular/core';
import {ShowsService} from '../shows.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-details',
  template: `
    <h1>{{show.title}}</h1>
    <p>{{description}}</p>
    <mat-list>
      <h3 mat-subheader>Episodes</h3>
      <mat-list-item *ngFor="let episode of episodes">
        <a mat-icon-button>
          <mat-icon mat-list-icon>play_circle_outline</mat-icon>
        </a>
        <h4 mat-line>{{episode.title}}</h4>
        <p mat-line> {{episode.aired | date}} </p>
      </mat-list-item>
    </mat-list>
  `,
  styles: []
})
export class ViewDetailsComponent implements OnInit {
  episodes;
  description;
  show;
  id;

  constructor(private showsService: ShowsService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(({id}) => this.id = id);
    this.show = showsService.getShow(this.id);
    this.episodes = showsService.getEpisodes(this.id);
    this.description = showsService.getDescription(this.id);
  }

  ngOnInit() {
  }

}
