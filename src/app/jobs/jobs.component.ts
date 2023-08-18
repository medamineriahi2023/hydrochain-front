import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {JobService} from "../core/services/job/job.service";
import {DepartementsService} from "../core/services/departements/departements.service";
import {Departements} from "../core/models/Departements";
import {JobTypeService} from "../core/services/jobType/job-type.service";
import {LocationService} from "../core/services/location/location.service";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit{
  departements = new FormControl('');
  jobTypesList = new FormControl('');
  locationList = new FormControl('');

  jobs : any[];
  jobsBackUp : any[];
  departments: any[];
  jobTypes: any[];
  locations: any[];
  searchInput: string;
  remoteOnly: boolean = false;
  constructor(private jobService:JobService,
              private departementsService :DepartementsService,
              private jobTypeService:JobTypeService,
              private locationService:LocationService) {
  }

  fetchData(): void {
    this.jobService.getAll().subscribe((e: any) => {
      this.jobs = e;
      this.jobsBackUp = e.data;
      this.applyFilters();
    });
  }

  ngOnInit(): void {
    this.fetchData();

    this.departementsService.getAll().subscribe((e: any) => this.departments = e.data);
    this.jobTypeService.getAll().subscribe((e: any) => this.jobTypes = e.data);
    this.locationService.getAll().subscribe((e: any) => this.locations = e.data);

    this.departements.valueChanges.subscribe(e => {
      this.applyFilters();
    });

    this.jobTypesList.valueChanges.subscribe(e => {
      this.applyFilters();
    });

    this.locationList.valueChanges.subscribe(e => {
      this.applyFilters();
    });
  }

  applyFilters() {
    let filteredJobs = this.jobsBackUp;

    if (this.departements.value.length > 0) {
      filteredJobs = filteredJobs.filter(j => this.departements.value.includes(j.attributes.departement?.data?.attributes.name));
    }

    if (this.jobTypesList.value.length > 0) {
      filteredJobs = filteredJobs.filter(j => this.jobTypesList.value.includes(j.attributes.jobType));
    }

    if (this.locationList.value.length > 0) {
      filteredJobs = filteredJobs.filter(j => this.locationList.value.includes(j.attributes.location?.data?.attributes.name));
    }

    this.jobs = filteredJobs;
  }

  search(searchInput: string) {
    const normalizedSearchInput = searchInput.toLowerCase().trim();

    if (!normalizedSearchInput) {
      // Reset the search and show all jobs
      this.jobs = [...this.jobsBackUp];
      return;
    }

    this.jobs = this.jobsBackUp.filter(j =>
      j.attributes.name.toLowerCase().indexOf(normalizedSearchInput) !== -1
    );
  }

  remoteChange(remoteOnly: boolean) {
    if (remoteOnly === true)
    this.jobs = this.jobsBackUp.filter(j => j.attributes.isRemote === remoteOnly);
    else
      this.jobs = this.jobsBackUp;
  }
}
