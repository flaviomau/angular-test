import { Component, ViewChild } from '@angular/core';
import {NgbDateStruct, NgbCalendar, NgbDatepicker} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public cards: Array<any> = [];
  public model: NgbDateStruct;
  
  @ViewChild('dp', {static: false}) datepicker: NgbDatepicker;

  constructor(private calendar: NgbCalendar) {
  }

  addCard(cardText: string) {
    this.cards.push({text: cardText});
  }

  selectDate(year, month, day) {
    this.model = { year, month, day }
    this.datepicker.navigateTo(this.model);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.model = this.calendar.getToday();
      this.datepicker.navigateTo(this.model);
    });    
 }

}
