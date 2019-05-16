import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  @Input('tip-owed') tipOwed: number;
  @Input('total-owed') totalOwed: number;
  @Input('owed-per-person') owedPerPerson: number;
  @Input('owed-by-others') owedByOthers: number;
  @Input('bill-is-split') billIsSplit: number;

  constructor() { }

  ngOnInit() {
  }

}
