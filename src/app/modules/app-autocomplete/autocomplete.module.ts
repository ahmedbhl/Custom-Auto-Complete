import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppAutocompleteComponent } from './app-autocomplete.component';
import { AutocompleteDirective } from './autocomplete.directive';
import { AutocompleteContentDirective } from './autocomplete-content.directive';
import { OptionComponent } from './option/app-option.component';

const publicApi = [
  AppAutocompleteComponent,
  AutocompleteDirective,
  AutocompleteContentDirective,
  OptionComponent,
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [publicApi],
  exports: [publicApi]
})
export class AutocompleteModule {
}
