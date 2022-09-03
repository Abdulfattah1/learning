import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-application-form",
  templateUrl: "./application-form.component.html",
  styleUrls: ["./application-form.component.scss"],
})
export class ApplicationFormComponent implements OnInit {
  form!: FormGroup;
  constructor() {
    this._initForm();
  }

  ngOnInit(): void {}

  private _initForm(): void {
    this.form = new FormGroup<any>({
      personal_information: new FormControl(null, [Validators.required]),
    });
  }
}
