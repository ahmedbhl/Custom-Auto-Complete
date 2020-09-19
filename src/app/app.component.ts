import { Component, VERSION } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public countries = [
    { id: 1, label: "Albania" },
    { id: 2, label: "Belgium" },
    { id: 3, label: "Denmark" },
    { id: 4, label: "Montenegro" },
    { id: 5, label: "Turkey" },
    { id: 6, label: "Ukraine" },
    { id: 7, label: "Macedonia" },
    { id: 8, label: "Slovenia" },
    { id: 9, label: "Georgia" },
    { id: 10, label: "India" },
    { id: 11, label: "Russia" },
    { id: 12, label: "Switzerland" },
    { id: 13, label: "Tunisia" },
    { id: 14, label: "France" }
  ];
  control = new FormControl();
}
