import { Injectable } from '@angular/core';
import {AbstractServiceService} from "../abstract/abstract.service";
import {Cards} from "../../models/Cards";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CardsService extends AbstractServiceService<Cards>{

  constructor(http:HttpClient) {
    super("service" , http);
  }}
