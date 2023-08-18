import { Injectable } from '@angular/core';
import {AbstractServiceService} from "../abstract/abstract.service";
import {JobType} from "../../models/JobType";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JobTypeService extends AbstractServiceService<JobType>{

  constructor(http:HttpClient) {
    super("job-type" , http);
  }
}
