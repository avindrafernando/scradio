import { Component, OnInit } from '@angular/core';
import {ShowsService} from '../shows.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
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
