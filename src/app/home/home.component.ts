import {Component, OnInit} from '@angular/core';
import {CardsService} from "../core/services/cards/cards.service";
import {Cards} from "../core/models/Cards";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  cards: any;
  constructor(private cardsService :CardsService) {
  }

  ngOnInit(): void {
    this.cardsService.getAll().subscribe((e : any) => {this.cards = e.data})
  }

}
