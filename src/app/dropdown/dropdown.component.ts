import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() options: number[];
  @Input() selected: number;
  @Output() selectedChange = new EventEmitter<number>();
  @Input() id: string;
  @Input() label: string;
  @Input('option-postfix') optionPostfix: string;

  constructor() {
  }

  ngOnInit() {
  }

  optionSelected(): void {
    this.selectedChange.emit(this.selected);
  }

}
