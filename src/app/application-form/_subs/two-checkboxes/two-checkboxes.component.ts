import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  Input,
  OnInit,
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { MatRadioChange } from "@angular/material/radio";
import { BaseControlValueAccessor } from "src/app/models/bases/base-contorl-value-accessor.model";
import { StaticListItem } from "src/app/models/static-list-item.model";

@Component({
  selector: "app-two-checkboxes",
  templateUrl: "./two-checkboxes.component.html",
  styleUrls: ["./two-checkboxes.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TwoCheckboxesComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TwoCheckboxesComponent
  extends BaseControlValueAccessor
  implements OnInit
{
  @Input() ariaLabel = "Select a value";
  @Input() items: StaticListItem[] = [];
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
