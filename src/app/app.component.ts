import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'billsplit2';

  billTotal: number;
  tipFrom: number;

  constructor() {
    this.billTotal = 13.37;
    this.tipFrom = 1.337;
  }
}
