import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <mat-card>
      <mat-card-header>
        <div mat-card-avatar class="avatar"></div>
        <mat-card-title>404 Page Not Found</mat-card-title>
        <mat-card-subtitle>Oh, geez! Oh, man!</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <p>
          Well then get your $#!% together, get it all together and put it in a back pack, all your $#!%, so it's together...
        </p>
        <p>
          ... And if you gotta take it some where, take it somewhere, you know,
          take it to the $#!% store and sell it, or put it in the $#!% museum.
          I don't care what you do, you just gotta get it together.
        </p>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .avatar {
      background-image: url('https://78.media.tumblr.com/tumblr_nuoj5pQqHa1rov8uxo1_1442255167_cover.png');
      background-size: cover;
    }
  `]
})
export class NotFoundComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
