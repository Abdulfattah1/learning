import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  OnInit,
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { MatRadioChange } from "@angular/material/radio";
import { BaseControlValueAccessor } from "src/app/models/bases/base-contorl-value-accessor.model";

@Component({
  selector: "app-gender-input",
  templateUrl: "./gender-input.component.html",
  styleUrls: ["./gender-input.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GenderInputComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenderInputComponent
  extends BaseControlValueAccessor
  implements OnInit
{
  constructor(private cd: ChangeDetectorRef) {
    super();
  }

  writeValue(obj: any): void {
    this.value = obj;
    this.cd.detectChanges();
  }

  ngOnInit(): void {}

  onValueChange(event: MatRadioChange): void {
    this.onChange(event.value);
  }
}
