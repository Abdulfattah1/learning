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
import { StaticListItem } from "src/app/models/static-list-item.model";
import { idCardTypes } from "src/app/models/static-lists/id-types.list";

@Component({
  selector: "app-id-card-type-input",
  templateUrl: "./id-card-type-input.component.html",
  styleUrls: ["./id-card-type-input.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IdCardTypeInputComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdCardTypeInputComponent
  extends BaseControlValueAccessor
  implements OnInit
{
  idCardTyps: StaticListItem[] = [];
  constructor(private cd: ChangeDetectorRef) {
    super();
  }

  writeValue(obj: any): void {
    this.value = obj;
    this.cd.detectChanges();
  }

  ngOnInit(): void {
    this._initIdCardTypes();
  }

  onValueChange(event: MatRadioChange): void {
    this.onChange(event.value);
  }

  private _initIdCardTypes(): void {
    this.idCardTyps = idCardTypes;
  }
}
