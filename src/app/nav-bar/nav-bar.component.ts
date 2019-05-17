import { Component, OnInit } from '@angular/core';
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  faMoneyBillWave = faMoneyBillWave;

  constructor() { }

  ngOnInit() {
  }

}
