import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list.component';
import {DetailsComponent} from './details.component';
import {MaterialModule} from '../material';
import {RouterModule} from '@angular/router';
import {ShowsService} from './shows.service';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([])
  ],
  declarations: [ListComponent, DetailsComponent],
  providers: [ShowsService]
})
export class ShowsModule {
}
