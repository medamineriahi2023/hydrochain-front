import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobsComponent} from './jobs.component';
import {Route, RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import { JobDetailComponent } from './job-detail/job-detail.component';
import {NgbInputDatepicker} from "@ng-bootstrap/ng-bootstrap";
import {MatButtonModule} from "@angular/material/button";
import { JobCardComponent } from './job-card/job-card.component';


const jobsRoutes: Route[] = [
  {path: '', component: JobsComponent },
  {path: 'detail/:id', component: JobDetailComponent },

];

@NgModule({
  declarations: [
    JobsComponent,
    JobDetailComponent,
    JobCardComponent,
  ],
  imports: [
    RouterModule.forChild(jobsRoutes),
    CommonModule,
    SharedModule,
    MatSlideToggleModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
    NgbInputDatepicker,
    MatButtonModule,
    FormsModule
  ]
})
export class JobsModule { }
