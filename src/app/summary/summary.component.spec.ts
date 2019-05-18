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

    it('should hide the summary if the tip owed is not a number and the total tip is valid', () => {
        component.tipOwed = NaN;
        component.totalOwed = 1;

        const isVisible = component.summaryIsVisible();

        expect(isVisible).toBe(false);
    });

    it('should hide the summary if the tip owed is 0 and the total tip is valid', () => {
        component.tipOwed = 0;
        component.totalOwed = 1;

        const isVisible = component.summaryIsVisible();

        expect(isVisible).toBe(false);
    });

    it('should hide the summary if the tip owed is valid and the total tip is not a number', () => {
        component.tipOwed = 1;
        component.totalOwed = NaN;

        const isVisible = component.summaryIsVisible();

        expect(isVisible).toBe(false);
    });

    it('should hide the summary if the tip owed is valid and total tip from is 0', () => {
        component.tipOwed = 0;
        component.totalOwed = 1;

        const isVisible = component.summaryIsVisible();

        expect(isVisible).toBe(false);
    });

    it('should show the summary if the tip owed is valid and total tip from is valid', () => {
        component.tipOwed = 1;
        component.totalOwed = 1;

        const isVisible = component.summaryIsVisible();

        expect(isVisible).toBe(true);
    });
});
