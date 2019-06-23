import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import {NgbDateStruct, NgbCalendar, NgbDatepicker} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss']
})
export class InputDateComponent implements OnInit {
  @ViewChild('dp', {static: false}) dp: NgbDatepicker;
  @Input() modelDate;
  @Output() onDateChange = new EventEmitter<NgbDateStruct>();

  constructor(private calendar: NgbCalendar) { }

  ngOnInit() {}

  ngAfterViewInit(){  
    setInterval(()=>{
      this.dp.navigateTo(this.modelDate)
    })  
  }

  onDataSelected(){
    this.onDateChange.emit(this.modelDate);
  }
}
