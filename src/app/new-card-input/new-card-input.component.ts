import { Component, EventEmitter, OnInit, OnDestroy, Output, HostListener, /*ViewChild*/ } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { takeWhile, debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-new-card-input',
  templateUrl: './new-card-input.component.html',
  styleUrls: ['./new-card-input.component.scss'],
  host: { 'class': 'col-4' }
})

export class NewCardInputComponent implements OnInit, OnDestroy {
  @Output() onCardAdd = new EventEmitter<string>();
  private alive = true;

  newCardForm: FormGroup;

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code === "Enter" && this.newCardForm.valid) {
      this.addCard(this.newCardForm.controls['text'].value);
    }
  }

  constructor(fb: FormBuilder) {
    this.newCardForm = fb.group({
      'text': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    });

    this.newCardForm.valueChanges.pipe(
      filter((value) => this.newCardForm.valid),
      debounceTime(500),
      takeWhile(() => this.alive)
    ).subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
  }

  addCard(text) {
    this.onCardAdd.emit(text);
    this.newCardForm.controls['text'].setValue('');
  }

  ngOnDestroy(){
    this.alive = false;
  }

}
