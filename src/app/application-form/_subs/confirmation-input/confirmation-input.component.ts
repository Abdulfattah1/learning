import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  OnInit,
  Optional,
  Self,
} from "@angular/core";
import { NgControl, NG_VALUE_ACCESSOR } from "@angular/forms";
import {
  MatFormFieldControl,
  MAT_FORM_FIELD,
} from "@angular/material/form-field";
import { MatSelectChange } from "@angular/material/select";
import { Observable } from "rxjs";
import { BaseControlValueAccessor } from "src/app/models/bases/base-contorl-value-accessor.model";

@Component({
  selector: "app-confirmation-input",
  templateUrl: "./confirmation-input.component.html",
  styleUrls: ["./confirmation-input.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmationInputComponent
  extends BaseControlValueAccessor
  implements OnInit
{
  @Input() label!: string;
  constructor(@Optional() @Self() public ngControl: NgControl) {
    super();
    if (this.ngControl != null) {
      // Setting the value accessor directly (instead of using
      // the providers) to avoid running into a circular import.
      this.ngControl.valueAccessor = this;
    }
  }

  writeValue(obj: boolean): void {
    this.value = obj;
  }

  ngOnInit(): void {}

  onValueChange(event: MatSelectChange): void {
    this.onChange(event.value);
  }
}
