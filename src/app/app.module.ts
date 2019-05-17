import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PriceEntryComponent } from './price-entry/price-entry.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SummaryComponent } from './summary/summary.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PriceEntryComponent,
    DropdownComponent,
    SummaryComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
