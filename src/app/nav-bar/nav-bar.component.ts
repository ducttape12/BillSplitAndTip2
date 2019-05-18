import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faMoneyBillWave, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  appIcon = faMoneyBillWave;
  resetIcon = faTrashAlt;

  @Output() clear = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  clearScreen(): void {
    this.clear.emit();
  }
}
