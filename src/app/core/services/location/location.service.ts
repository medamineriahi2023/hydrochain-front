import { Injectable } from '@angular/core';
import {AbstractServiceService} from "../abstract/abstract.service";
import {Location} from "../../models/Location";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LocationService extends AbstractServiceService<Location>{

  constructor(http:HttpClient) {
    super("location" , http);
  }}
