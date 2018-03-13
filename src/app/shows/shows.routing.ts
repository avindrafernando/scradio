import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from './list.component';
import {DetailsComponent} from './details/details.component';
import {ViewDetailsComponent} from './details/view-details.component';
import {EditDetailsComponent} from './details/edit-details.component';

const routes: Routes = [{
  path: '', children: [
    {path: '', component: ListComponent},
    {path: ':id', component: DetailsComponent, children: [
      {path: '', component: ViewDetailsComponent},
      {path: 'edit', component: EditDetailsComponent}
    ]}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowsRoutingModule {}
