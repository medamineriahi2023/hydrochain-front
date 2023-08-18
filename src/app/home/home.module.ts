import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {Route, RouterModule} from "@angular/router";
import {TopBodyComponent} from "../components/body/top-body.component";
import {CardsComponent} from "../components/cards/cards.component";
import {StatsComponent} from "../components/stats/stats.component";
import {GetInTouchComponent} from "../components/get-in-touch/get-in-touch.component";
import {HebergementComponent} from "../components/hebergement/hebergement.component";
import {FooterComponent} from "../shared/footer/footer.component";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

const homeRoutes: Route[] = [
  {path: '**', component: HomeComponent },

];

@NgModule({
  declarations: [
    HomeComponent,
    TopBodyComponent,
    CardsComponent,
    StatsComponent,
    GetInTouchComponent,
    HebergementComponent,
  ],
    imports: [
        RouterModule.forChild(homeRoutes),
        CommonModule,
        SharedModule,
        FormsModule,
        HttpClientModule
    ]
})
export class HomeModule { }
