import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryComponent } from './summary.component';

describe('SummaryComponent', () => {
    let component: SummaryComponent;
    let fixture: ComponentFixture<SummaryComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SummaryComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SummaryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should hide the summary if the total tip is not a number', () => {
        component.totalOwed = NaN;

        const isVisible = component.summaryIsVisible();

        expect(isVisible).toBe(false);
    });

    it('should hide the summary if the total tip is 0', () => {
        component.totalOwed = 0;

        const isVisible = component.summaryIsVisible();

        expect(isVisible).toBe(false);
    });

    it('should show the summary if the total tip is valid', () => {
        component.totalOwed = 1;

        const isVisible = component.summaryIsVisible();

        expect(isVisible).toBe(true);
    });
});
