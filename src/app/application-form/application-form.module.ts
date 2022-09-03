import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ApplicationFormRoutingModule } from "./application-form-routing.module";
import { ApplicationFormComponent } from "./application-form.component";
import { MatRadioModule } from "@angular/material/radio";
import { MatTabsModule } from "@angular/material/tabs";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NationalityInputComponent } from "./_subs/nationality-input/nationality-input.component";
import { IdCardTypeInputComponent } from "./_subs/id-card-type-input/id-card-type-input.component";
import { TwoCheckboxesComponent } from "./_subs/two-checkboxes/two-checkboxes.component";
import { TranslateModule } from "@ngx-translate/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { PersonalInformationComponent } from "./_subs/personal-information/personal-information.component";
import { MatInputModule } from "@angular/material/input";
import { GenderInputComponent } from "./_subs/gender-input/gender-input.component";
import { ConfirmationInputComponent } from "./_subs/confirmation-input/confirmation-input.component";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
@NgModule({
  declarations: [
    ApplicationFormComponent,
    GenderInputComponent,
    NationalityInputComponent,
    IdCardTypeInputComponent,
    TwoCheckboxesComponent,
    PersonalInformationComponent,
    ConfirmationInputComponent,
  ],
  imports: [
    CommonModule,
    ApplicationFormRoutingModule,
    MatRadioModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class ApplicationFormModule {}
