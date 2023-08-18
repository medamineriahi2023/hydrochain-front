import { Injectable } from '@angular/core';
import {AbstractServiceService} from "../abstract/abstract.service";
import {Job} from "../../models/Job";
import {HttpClient} from "@angular/common/http";
import {StrapiModel} from "../../models/StrapiModel";

@Injectable({
  providedIn: 'root'
})
export class JobService extends AbstractServiceService<Job>{

  constructor(http:HttpClient) {
    super("job" , http);
  }

}
