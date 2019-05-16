import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-price-entry',
  templateUrl: './price-entry.component.html',
  styleUrls: ['./price-entry.component.css']
})
export class PriceEntryComponent implements OnInit {
  @Input('field-description') fieldDescription: string;
  @Input() id: string;
  @Input() price: number;
  @Output() priceChange = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  priceChanged(newPrice: number): void {
    this.price = newPrice;
    
    if(this.price < 0) {
      this.price = 0;
    }

    this.priceChange.emit(this.price);
  }
}
