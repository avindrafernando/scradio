import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import { ListComponent } from './shows/list.component';
import { DetailsComponent } from './shows/details.component';


const routes: Routes = [
  {path: 'shows', children: [
    {path: '', component: ListComponent},
    {path: ':id', component: DetailsComponent}
  ]},
  {path: '', component: HomeComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
