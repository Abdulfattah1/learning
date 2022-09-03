import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  OnInit,
} from "@angular/core";
import {
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
} from "@angular/forms";
import { BaseControlValueAccessor } from "src/app/models/bases/base-contorl-value-accessor.model";

@Component({
  selector: "app-personal-information",
  templateUrl: "./personal-information.component.html",
  styleUrls: ["./personal-information.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PersonalInformationComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalInformationComponent
  extends BaseControlValueAccessor
  implements OnInit
{
  form!: FormGroup;
  constructor() {
    super();
    this._initForm();
  }

  /**
   * @TODO Please add type for this param
   */
  writeValue(obj: any): void {
    if (!!obj) {
      this._patchValues(obj);
    }
  }

  ngOnInit(): void {}

  private _initForm(): void {
    this.form = new FormGroup({
      first_name: new FormControl(null, [Validators.required]),
      last_name: new FormControl(null, [Validators.required]),
      fathar_name: new FormControl(null, [Validators.required]),
      mother_name: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      birth_date: new FormControl(null, [Validators.required]),
      full_name: new FormControl(null, [Validators.required]),
      governorate: new FormControl(null, [Validators.required]),
      id_card_type: new FormControl(null, [Validators.required]),
      id_card_number: new FormControl(null, [Validators.required]),
      nationality: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      phone_number: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      marital_status: new FormControl(null, [Validators.required]),
      have_disease: new FormControl(false, [Validators.required]),
      disease_description: new FormControl(null, [Validators.required]),
      family_resident_area: new FormControl(null, [Validators.required]),
    });
  }

  private _patchValues(values: any): void {
    this.form.patchValue({
      ...values,
    });
  }

  public get values(): any {
    return this.form.value;
  }
}
