import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MissionlistComponent } from './missionlist/missionlist.component'
import { MissiondetailsComponent } from './missiondetails/missiondetails.component'
import { Routes,RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'missionlist', pathMatch:'full'},
  {path: 'missionlist', component: MissionlistComponent},
  {path: 'missionlist/details/:id', component: MissiondetailsComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
