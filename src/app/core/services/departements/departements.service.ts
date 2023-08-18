import { Injectable } from '@angular/core';
import {AbstractServiceService} from "../abstract/abstract.service";
import {Departements} from "../../models/Departements";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DepartementsService extends AbstractServiceService<Departements>{

  constructor(http:HttpClient) {
    super("departement" , http);
  }
}
