import {
  ChangeDetectorRef,
  Directive,
  Input,
  Optional,
  Self,
} from "@angular/core";
import { ControlValueAccessor, NgControl } from "@angular/forms";
import { Base } from "./base";

/**
 * @TODO Make this class more generic for all kinds of control value accessor components
 */
@Directive()
export abstract class BaseControlValueAccessor
  extends Base
  implements ControlValueAccessor
{
  value: any;

  disabled = false;
  readOnly = false;

  onChange: any = () => {};
  onTouch: any = () => {};

  constructor() {
    super();
  }

  abstract writeValue(obj: any): void;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
