import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list.component';
import {DetailsComponent} from './details.component';
import {MaterialModule} from '../material';
import {ShowsService} from './shows.service';
import {ShowsRoutingModule} from './shows.routing';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ShowsRoutingModule
  ],
  declarations: [ListComponent, DetailsComponent],
  providers: [ShowsService]
})
export class ShowsModule {
}
