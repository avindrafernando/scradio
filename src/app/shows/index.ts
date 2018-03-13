import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ShowsRoutingModule} from './shows-routing.module';
import {ListComponent} from './list.component';
import {DetailsComponent} from './details.component';
import { MaterialModule } from '../material';

@NgModule({
  imports: [
    CommonModule,
    ShowsRoutingModule,
    MaterialModule
  ],
  declarations: [ListComponent, DetailsComponent]
})
export class ShowsModule {
}
