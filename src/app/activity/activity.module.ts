import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityComponent } from './activity.component';
import {Route, RouterModule} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {SharedModule} from "../shared/shared.module";


const activityRoutes: Route[] = [
  {path: '**', component: ActivityComponent },

];
@NgModule({
  declarations: [
    ActivityComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(activityRoutes),
    SharedModule,
  ]
})
export class ActivityModule { }
