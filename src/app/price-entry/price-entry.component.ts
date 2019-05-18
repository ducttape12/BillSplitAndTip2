import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-price-entry',
  templateUrl: './price-entry.component.html',
  styleUrls: ['./price-entry.component.css']
})
export class PriceEntryComponent implements OnInit {
  @Input('field-description') fieldDescription: string;
  @Input() id: string;
  
  _price: number;
  @Input() set price(value: number) {
    this.updatePriceAndErrorStatus(value);
  }

  @Output() priceChange = new EventEmitter<number>();
  @Output() errorChange = new EventEmitter<boolean>();

  error: boolean;

  constructor() {
    this.error = false;
  }

  ngOnInit() {
  }

  private updatePriceAndErrorStatus(newPrice: number) {
    this._price = newPrice;
    this.error = this._price < 0;
  }

  priceChanged(newPrice: number): void {
    this.updatePriceAndErrorStatus(newPrice);

    this.priceChange.emit(this._price);
    this.errorChange.emit(this.error);
  }
}
