import {Component, OnInit} from '@angular/core';
import {ShowsService} from './shows.service';


@Component({
  selector: 'app-details',
  template: `
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
  styles: [`
    mat-list {
      max-width: 600px;
    }
  `]
})
export class DetailsComponent implements OnInit {
  episodes;
  description;

  constructor(private showsService: ShowsService) {
    const id = 1;
    this.episodes = showsService.getEpisodes(id);
    this.description = showsService.getDescription(id);
  }

  ngOnInit() {
  }

}
