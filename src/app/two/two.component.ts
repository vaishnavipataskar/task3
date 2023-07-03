import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent {
    @Input() recieveData :any;
    @Input() recieveData2 :any;
  }
