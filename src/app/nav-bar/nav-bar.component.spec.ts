import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
    let component: NavBarComponent;
    let fixture: ComponentFixture<NavBarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NavBarComponent],
            imports: [
                FontAwesomeModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should emit a clear screen when clearScreen is called', () => {
        spyOn(component.clear, 'emit');

        component.clearScreen();

        expect(component.clear.emit).toHaveBeenCalled();
    });
});
