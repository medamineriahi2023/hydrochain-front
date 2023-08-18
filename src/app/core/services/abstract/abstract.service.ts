import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {StrapiModel} from "../../models/StrapiModel";
import {Contact} from "../../models/Contact";

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractServiceService<T> {
  url = "http://localhost:1337/api/";
  protected constructor(endPoint : string, public http :HttpClient) {
    this.url += endPoint;
  }


  save(entity :T): Observable<T>{
    let strapi = new StrapiModel<T> ;
    strapi.data = entity;
    return this.http.post<T>(this.url, strapi);
  }

  getAll(): Observable<T[]>{
    return this.http.get<T[]>(this.url+'s?populate=*');
  }


  getById(id: any): Observable<T>{
    return this.http.get<T>(this.url+`s/${id}?populate=*`);
  }

  delete(id: any){
    return this.http.delete<T[]>(this.url+`/${id}`);
  }

  update(entity: any){
    return this.http.put<T[]>(this.url, entity);
  }


}
