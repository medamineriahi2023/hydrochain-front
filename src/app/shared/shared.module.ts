import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {RouterLink, RouterLinkActive} from "@angular/router";



@NgModule({
  declarations: [HeaderComponent,
  FooterComponent],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterLinkActive,
    RouterLink
  ]
})
export class SharedModule { }
