import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { PriceEntryComponent } from './price-entry/price-entry.component';
import { SummaryComponent } from './summary/summary.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { componentFactoryName } from '@angular/compiler';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                DropdownComponent,
                PriceEntryComponent,
                SummaryComponent,
                NavBarComponent,
                FooterComponent
            ],
            imports: [
                FormsModule,
                FontAwesomeModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    })

    it('should create the app', () => {
        expect(component).toBeTruthy();
    });

    it('should initialize properties correctly', () => {
        component.initializeProperties();

        expect(component.billTotal).toBeUndefined();
        expect(component.tipFrom).toBeUndefined();
        expect(component.selectedPercentage).toBe(20);
        expect(component.selectedSplit).toBe(1);
    });

    it('should calculate the tip owed amount correctly', () => {
        component.tipFrom = 20;
        component.selectedPercentage = 20;

        const tipOwed = component.tipOwed();

        expect(tipOwed).toBe(4);
    });

    it('should calculate the total owed amount correctly', () => {
        component.tipFrom = 20;
        component.selectedPercentage = 20;
        component.billTotal = 25;

        const totalOwed = component.totalOwed();

        expect(totalOwed).toBe(29);
    });

    it('should calculate the owed per person amount correctly', () => {
        component.tipFrom = 20;
        component.selectedPercentage = 20;
        component.billTotal = 23;
        component.selectedSplit = 3;

        const owedPerPerson = component.owedPerPerson();

        expect(owedPerPerson).toBe(9);
    });

    it('should calculate the owed by others amount correctly', () => {
        component.tipFrom = 20;
        component.selectedPercentage = 20;
        component.billTotal = 23;
        component.selectedSplit = 3;

        const owedByOthers = component.owedByOthers();

        expect(owedByOthers).toBe(18);
    });

    it('will determine bill is split if more than 1 person is selected', () => {
        component.selectedSplit = 2;

        const isBillSplit = component.isBillSplit();

        expect(isBillSplit).toBe(true);
    });

    it('will determine bill is not split if 1 person is selected', () => {
        component.selectedSplit = 1;

        const isBillSplit = component.isBillSplit();

        expect(isBillSplit).toBe(false);
    });
});
