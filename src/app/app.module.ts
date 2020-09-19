import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { AppAutocompleteComponent } from './modules/app-autocomplete/app-autocomplete.component';
import { AutocompleteModule } from './modules/app-autocomplete/autocomplete.module';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    OverlayModule,
    BrowserAnimationsModule,
    AutocompleteModule
  ],
  declarations: [AppComponent, FilterPipe],
  bootstrap: [AppComponent],
  entryComponents: [AppAutocompleteComponent]
})
export class AppModule {}
