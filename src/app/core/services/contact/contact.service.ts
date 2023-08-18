import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AbstractServiceService} from "../abstract/abstract.service";
import {Contact} from "../../models/Contact";
import {StrapiModel} from "../../models/StrapiModel";

@Injectable({
  providedIn: 'root'
})
export class ContactService extends AbstractServiceService<Contact>{

  constructor(http:HttpClient) {
    super("contacts" , http);
  }

}
