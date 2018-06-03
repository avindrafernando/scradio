import {Component, OnInit} from '@angular/core';
import {AppAuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(public auth: AppAuthService) {
  }

  ngOnInit() {
  }

}
