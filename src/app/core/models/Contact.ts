import {BaseEntity} from "./abstracts/BaseEntity";

export class Contact extends BaseEntity{
  firstname:string;
  lastname:string;
  email:string;
  message:string;
}
