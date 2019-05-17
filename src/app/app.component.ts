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

  tipPercentages: number[] = [0, 5, 10, 13, 15, 18, 20, 23, 25, 28, 30];
  selectedPercentage: number;

  waysToSplit: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  selectedSplit: number;

  billTotalError: boolean = false;
  tipFromError: boolean = false;

  constructor() {
    this.initializeProperties();
  }

  initializeProperties(): void {
    this.billTotal = undefined;
    this.tipFrom = undefined;
    this.selectedPercentage = 20;
    this.selectedSplit = 1;
  }

  clearScreen(): void {
    this.initializeProperties();
  }

  tipOwed(): number {
    return this.tipFrom * (this.selectedPercentage / 100);
  }

  totalOwed(): number {
    return this.tipOwed() + this.billTotal;
  }

  owedPerPerson(): number {
    return this.totalOwed() / this.selectedSplit;
  }

  owedByOthers(): number {
    return this.owedPerPerson() * (this.selectedSplit - 1);
  }

  isBillSplit(): boolean {
    return this.selectedSplit > 1;
  }
}
