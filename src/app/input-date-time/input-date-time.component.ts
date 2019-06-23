import { Component, ViewChild, OnInit, AfterContentInit } from '@angular/core';
import {NgbDateStruct, NgbDatepicker, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-input-date-time',
  templateUrl: './input-date-time.component.html',
  styleUrls: ['./input-date-time.component.scss']
})
export class InputDateTimeComponent implements OnInit, AfterContentInit {
  public modelDate: NgbDateStruct;
  public modelTime;
    
  constructor(private calendar: NgbCalendar) { }

  ngOnInit() {
    this.modelTime = {hour: 13, minute: 30}
    //this.modelDate = this.calendar.getToday();
    this.modelDate = {year: 2015, month: 5, day: 15};
  }

  ngAfterContentInit(){        
  }

  getDateChanged(newDate){
    this.modelDate = newDate;
  }

  getTimeChanged(newTime){
    this.modelTime = newTime;
  }
}
