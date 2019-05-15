import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceEntryComponent } from './price-entry.component';

describe('PriceEntryComponent', () => {
  let component: PriceEntryComponent;
  let fixture: ComponentFixture<PriceEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
