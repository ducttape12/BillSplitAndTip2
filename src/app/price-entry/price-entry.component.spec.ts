import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { PriceEntryComponent } from './price-entry.component';

describe('PriceEntryComponent', () => {
    let component: PriceEntryComponent;
    let fixture: ComponentFixture<PriceEntryComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PriceEntryComponent],
            imports: [
                FormsModule
            ]
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

    it('should set the price to the newPrice when priceChanged is called', () => {
        component.price = 12;

        component.priceChanged(13);

        expect(component.price).toBe(13);
    });

    it('should set the error to false when a price of 0 is set', () => {
        component.priceChanged(0);

        expect(component.error).toBe(false);
    });

    it('should set the error to false when a price of 0.01 is set', () => {
        component.priceChanged(0.01);

        expect(component.error).toBe(false);
    });

    it('should set the error to true when a price of -0.01 is set', () => {
        component.priceChanged(-0.01);

        expect(component.error).toBe(true);
    });

    it('should clear the error when no price is set', () => {
        component.priceChanged(undefined);

        expect(component.error).toBe(false);
    });

    it('should emit the price when the price is changed', () => {
        spyOn(component.priceChange, 'emit');
        
        component.priceChanged(12);

        expect(component.priceChange.emit).toHaveBeenCalledWith(12);
    });

    it('should emit the error when the price is changed', () => {
        spyOn(component.errorChange, 'emit');
        
        component.priceChanged(-12);

        expect(component.errorChange.emit).toHaveBeenCalledWith(true);
    });
});
