import {Component, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {JobService} from "../../core/services/job/job.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ApplieService} from "../../core/services/applie/applie.service";
import {Applie} from "../../core/models/Applie";
import {MessagesModalService} from "../../core/services/alerts/swal-alert.service";

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit{
  closeResult = '';
  public id: string;

  public job : any;


  constructor(private modalService: NgbModal,
              private jobService:JobService,
              private route:ActivatedRoute,
              private applieService:ApplieService,
              private messagesModalService:MessagesModalService) {

    this.id = this.route.snapshot.paramMap.get('id');


  }
  form = new FormGroup( {
    email : new FormControl ( '', [Validators.required, Validators.email] ) ,
    nom: new FormControl ( '', [Validators.required] ),
    prenom: new FormControl ( '', [Validators.required] ),
    links: new FormControl ( '', [Validators.required] ),
    mobile: new FormControl ( '', [Validators.required] ),
    phone: new FormControl ( '', [Validators.required] ),
    file: new FormControl ( null, [Validators.required] ),

  });

  selectedFile: File = null;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;

  }

  getErrorMessage() {
    if (this.form.controls["email"].hasError('required')) {
      return 'You must enter a value';
    }
    if (this.form.controls["nom"].hasError('required')) {
      return 'You must enter a value';
    } if (this.form.controls["prenom"].hasError('required')) {
      return 'You must enter a value';
    } if (this.form.controls["links"].hasError('required')) {
      return 'You must enter a value';
    } if (this.form.controls["mobile"].hasError('required')) {
      return 'You must enter a value';
    } if (this.form.controls["phone"].hasError('required')) {
      return 'You must enter a value';
    }

    return this.form.controls["email"].hasError('email') ? 'Not a valid email' : '';
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
    this.jobService.getById(this.id).subscribe((e :any) =>  {this.job = e.data.attributes ; console.log(this.job)});
  }

  applyAndClose() {
    this.modalService.dismissAll();
    let applie= new Applie();
    this.applieService.importFile(this.selectedFile).subscribe(e => {
      applie.nom = this.form.controls.nom.value;
      applie.prenom = this.form.controls.prenom.value;
      applie.email = this.form.controls.email.value;
      applie.mobile = this.form.controls.mobile.value;
      applie.phone = this.form.controls.phone.value;
      applie.links = this.form.controls.links.value;
      applie.cv = e[0].id;
      applie.job = this.id;
      this.applieService.save(applie).subscribe(s => this.messagesModalService.toastSuccess("Demande envoyé avec succés"));
    });
  }
}
