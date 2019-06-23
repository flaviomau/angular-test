import { Component, ViewChild } from '@angular/core';
import {NgbDateStruct, NgbCalendar, NgbDatepicker} from '@ng-bootstrap/ng-bootstrap';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public cards: Array<any> = [];
  
  addCard(cardText: string) {
    this.cards.push({text: cardText});
  }
}
