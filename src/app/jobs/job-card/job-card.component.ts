import {Component, Input, OnInit} from '@angular/core';
import {Job} from "../../core/models/Job";

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit{
  @Input() job: any;

  ngOnInit(): void {
    console.log(this.job);
  }


}
