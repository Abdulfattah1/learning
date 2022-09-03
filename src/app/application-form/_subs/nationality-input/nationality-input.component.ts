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
import { NATIONALITIES } from "src/app/models/static-lists/nationalities.list";

@Component({
  selector: "app-nationality-input",
  templateUrl: "./nationality-input.component.html",
  styleUrls: ["./nationality-input.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NationalityInputComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NationalityInputComponent
  extends BaseControlValueAccessor
  implements OnInit
{
  nationalities: StaticListItem[] = [];
  constructor(private cd: ChangeDetectorRef) {
    super();
  }

  writeValue(obj: any): void {
    this.value = obj;
    this.cd.detectChanges();
  }

  ngOnInit(): void {
    this._initNationalities();
  }

  onValueChange(value: string): void {
    this.onChange(value);
  }

  private _initNationalities(): void {
    this.nationalities = NATIONALITIES;
  }
}
