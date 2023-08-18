import { Injectable } from '@angular/core';
import {AbstractServiceService} from "../abstract/abstract.service";
import {Applie} from "../../models/Applie";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApplieService extends AbstractServiceService<Applie>{

  constructor(http:HttpClient) {
    super("applies" , http);
  }


  importFile(file : File): Observable<any> {
    const formData = new FormData();
    formData.append('files', file);
    return this.http.post<any>("http://localhost:1337/api/upload", formData);
  }
}
