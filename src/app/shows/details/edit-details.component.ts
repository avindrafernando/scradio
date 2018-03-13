import {Component, OnInit} from '@angular/core';
import {ShowsService} from '../shows.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-details',
  template: `

    <form>
      <mat-form-field>
        <input matInput placeholder="Title" name="title" [(ngModel)]="title">
      </mat-form-field>

      <mat-form-field>
        <textarea matInput placeholder="Description" name="description" [(ngModel)]="description"></textarea>
      </mat-form-field>
      <button md-button color="primary" type="button" (click)="save()">Save!</button>
      <button md-button color="warn" type="button" (click)="cancel()">Cancel</button>
    </form>
  `,
  styles: [`
    form {
      width: 100%;
    }

    mat-form-field {
      min-width: 150px;
      max-width: 500px;
      width: 100%;
    }
  `]
})
export class EditDetailsComponent implements OnInit {
  title;
  description;
  id;

  constructor(private showsService: ShowsService,
              private route: ActivatedRoute) {
    this.route.parent.params.subscribe(({id}) => this.id = id);
    this.title = (showsService.getShow(this.id)).title;
    this.description = showsService.getDescription(this.id);
  }

  ngOnInit() {
  }

  cancel() {
    this.title = (this.showsService.getShow(this.id)).title;
    this.description = this.showsService.getDescription(this.id);
  }

  save() {
    this.showsService.save({
      title: this.title,
      description: this.description,
      id: this.id
    });
  }

}
