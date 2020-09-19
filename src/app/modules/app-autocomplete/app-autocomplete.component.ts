import {
  Component,
  ContentChild,
  ContentChildren,
  QueryList,
  TemplateRef,
  ViewChild
} from "@angular/core";
import { switchMap } from "rxjs/operators";
import { merge } from "rxjs";
import { AutocompleteContentDirective } from "./autocomplete-content.directive";
import { OptionComponent } from "./option/app-option.component";

@Component({
  selector: "app-autocomplete",
  templateUrl: "./app-autocomplete.component.html",
  styleUrls: ["./app-autocomplete.component.scss"],
  exportAs: "appAutocomplete"
})
export class AppAutocompleteComponent {
  @ViewChild("root") rootTemplate: TemplateRef<any>;

  @ContentChild(AutocompleteContentDirective)
  content: AutocompleteContentDirective;

  @ContentChildren(OptionComponent) options: QueryList<OptionComponent>;

  optionsClick() {
    return this.options.changes.pipe(
      switchMap(options => {
        const clicks$ = options.map(option => option.click$);
        return merge(...clicks$);
      })
    );
  }
}
