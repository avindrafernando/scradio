import { Component, OnInit } from '@angular/core';
import { ShowsService } from './shows.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {
  shows;
  constructor(private showsService: ShowsService) {
    this.shows = showsService.getShows();
  }

  ngOnInit() {
  }

}
