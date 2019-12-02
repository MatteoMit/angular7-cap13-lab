import { Component, OnInit } from "@angular/core";
import { Appointment } from "../appointment";
@Component({
  selector: "simple-template-driven-form",
  templateUrl: "./template-driven-form.component.html",
  styleUrls: ["./template-driven-form.component.css"]
})
export class TemplateDrivenFormComponent {
  daysOfTheWeek = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì"];

  availableOffices = [
    { id: "A", name: "ufficio_A" },
    { id: "B", name: "ufficio_B" },
    { id: "C", name: "ufficio_C" }
  ];

  applications = [{ id: 0 }, { id: 1 }, { id: 2 }];

  model: Appointment = {
    name: "",
    mail: "",
    dayOfTheWeek: "Lunedì",
    office: "ufficio_A",
    application0: false,
    application1: false,
    application2: false
  };

}
export interface Appointment {
  name: string;
  mail: string;
  dayOfTheWeek: string;
  office: string;
  application0: boolean;
  application1: boolean;
  application2: boolean;
}
