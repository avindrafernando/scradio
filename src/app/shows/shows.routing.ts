import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from './list.component';
import {DetailsComponent} from './details.component';

const routes: Routes = [{
  path: '', children: [
    {path: '', component: ListComponent},
    {path: ':id', component: DetailsComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowsRoutingModule {}
