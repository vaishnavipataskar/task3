import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {
  @Output()dataEvent = new EventEmitter;
  value :string | undefined;
  value1 :string | undefined;
  @ViewChild('myForm') myFormObj :any;
  @ViewChild('inputone')inputOneData : ElementRef|any;
  @ViewChild('inputtwo')inputTwoData : ElementRef|any;

  clickAndSend(){  
  const data = [this.inputOneData.nativeElement.value, this.inputTwoData.nativeElement.value];
  this.dataEvent.emit(data);  
  
  }
  
}
