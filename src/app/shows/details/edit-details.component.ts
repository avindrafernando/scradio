import {Component, OnInit} from '@angular/core';
import {ShowsService} from '../shows.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.scss']
})
export class EditDetailsComponent implements OnInit {
  title;
  description;
  id;

  constructor(private showsService: ShowsService,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.parent.params.subscribe(({id}) => this.id = id);
    this.title = (showsService.getShow(this.id)).title;
    this.description = showsService.getDescription(this.id);
  }

  ngOnInit() {
  }

  goToView() {
    this.router.navigate(['shows', this.id]);
  }

  cancel() {
    this.title = (this.showsService.getShow(this.id)).title;
    this.description = this.showsService.getDescription(this.id);
    this.goToView();
  }

  save() {
    this.showsService.save({
      title: this.title,
      description: this.description,
      id: this.id
    });
    this.goToView();
  }

}
