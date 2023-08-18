import {BaseEntity} from "./abstracts/BaseEntity";

export class Job extends BaseEntity{
  jobTitle: string;
  description:string;
  requiredSkills:string;

}
