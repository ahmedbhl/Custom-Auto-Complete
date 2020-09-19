import { Component, VERSION } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

  options = [
    { id: 1, label: "One" },
    { id: 2, label: "Two" },
    { id: 3, label: "Three" },
    { id: 4, label: "Four" },
    { id: 5, label: "Five" },
    { id: 6, label: "sex" },
    { id: 7, label: "seven" }
  ];
  control = new FormControl();
}
