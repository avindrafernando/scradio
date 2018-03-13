import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list.component';
import {MaterialModule} from '../material';
import {ShowsService} from './shows.service';
import {ShowsRoutingModule} from './shows.routing';
import {DetailsComponent} from './details/details.component';
import {EditDetailsComponent} from './details/edit-details.component';
import {ViewDetailsComponent} from './details/view-details.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ShowsRoutingModule
  ],
  declarations: [
    ListComponent,
    DetailsComponent,
    EditDetailsComponent,
    ViewDetailsComponent
  ],
  providers: [ShowsService]
})
export class ShowsModule {
}
