import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-time',
  templateUrl: './input-time.component.html',
  styleUrls: ['./input-time.component.scss']
})
export class InputTimeComponent implements OnInit {
  @Input() modelTime;
  @Output() onTimeChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onTimeChanged(){
    this.onTimeChange.emit(this.modelTime);
  }

}
