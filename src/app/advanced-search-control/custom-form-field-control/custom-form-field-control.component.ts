import { MatInput } from '@angular/material/input';
import { FocusMonitor } from '@angular/cdk/a11y';
import {
  Component,
  OnInit,
  Input,
  HostBinding,
  ViewChild,
  ElementRef,
  OnDestroy,
  Optional,
  Self,
  DoCheck,
} from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import {
  NgControl,
  ControlValueAccessor,
  UntypedFormBuilder,
  UntypedFormGroup,
  UntypedFormControl,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import {
  ErrorStateMatcher,
  // CanUpdateErrorStateCtor,
  mixinErrorState,
  mixinDisabled,
  // CanDisableCtor,
} from '@angular/material/core';
import { take } from 'rxjs/operators';

export interface FormFieldValue {
  query: string;
  scope: string;
}

export class CustomErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: UntypedFormControl): boolean {
    return control.dirty && control.invalid;
  }
}

class SearchInputBase {
  constructor(
    public _parentFormGroup: FormGroupDirective,
    public _parentForm: NgForm,
    public _defaultErrorStateMatcher: ErrorStateMatcher,
    public ngControl: NgControl
  ) {}
}

const _SearchInputMixinBase
  // :CanUpdateErrorStateCtor & CanDisableCtor
  = mixinDisabled(mixinErrorState(SearchInputBase));

@Component({
  selector: 'app-custom-form-field-control',
  templateUrl: './custom-form-field-control.component.html',
  styleUrls: ['./custom-form-field-control.component.scss'],
  providers: [
    {
      provide: MatFormFieldControl,
      useExisting: CustomFormFieldControlComponent,
    },
    {
      provide: ErrorStateMatcher,
      useClass: CustomErrorMatcher,
    },
  ],
})

// Note use of MatFormFieldCustomComponent which requires an interface type
export class CustomFormFieldControlComponent
  extends _SearchInputMixinBase
  implements
    OnInit,
    OnDestroy,
    MatFormFieldControl<FormFieldValue>,
    ControlValueAccessor,
    DoCheck {
  static nextId = 0;
  @ViewChild(MatInput, { read: ElementRef, static: true })
  input: ElementRef;

  // once value is obtained then trigger it using StateChanges
  @Input()
  set value(value: FormFieldValue) {
    this.form.patchValue(value);
    this.stateChanges.next();
  }

  // return value using getter
  get value() {
    return this.form.value;
  }

  // Create a new unique id that increments for every instance
  @HostBinding()
  id = `custom-form-field-id-${CustomFormFieldControlComponent.nextId++}`;

  @Input()
  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  get placeholder() {
    return this._placeholder;
  }
  private _placeholder: string;

  focused: boolean;

  // return true if value.query is empty
  get empty(): boolean {
    return !this.value.query && !this.value.scope;
  }

  @HostBinding('class.floated')
  get shouldLabelFloat(): boolean {
    return true;
  }

  @Input()
  required: boolean;

  @Input()
  disabled: boolean;

  controlType = 'custom-form-field';

  @HostBinding('attr.aria-describedby') describedBy = '';

  onChange: (value: FormFieldValue) => void;

  // mark control as touched when onTouch function is called
  onTouch: () => void;

  form: UntypedFormGroup;


  // @Self means resolve on the same level
  //ngControl already has the value accessor
  constructor(
    private focusMonitor: FocusMonitor,
    @Optional() @Self() public ngControl: NgControl,
    private fb: UntypedFormBuilder,
    public _defaultErrorStateMatcher: ErrorStateMatcher,
    @Optional() _parentForm: NgForm,
    @Optional() _parentFormGroup: FormGroupDirective
  ) {
    super(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
    this.form = this.fb.group({
      scope: new UntypedFormControl(''),
      query: new UntypedFormControl(''),
    });
  }

  writeValue(obj: FormFieldValue): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.form.disable();
    this.stateChanges.next();
  }

  // returns empty array
  setDescribedByIds(ids: string[]): void {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(): void {
    this.focusMonitor.focusVia(this.input, 'program');
  }

  // monitor the input, referenced to matInut via ViewChild
  // once focused we take 1 input and subcribe then run the onTouch function
  ngOnInit(): void {
    this.focusMonitor.monitor(this.input).subscribe((focused) => {
      this.focused = !!focused;
      this.stateChanges.next();
    });
    this.focusMonitor
      .monitor(this.input)
      .pipe(take(1))
      .subscribe(() => {
        this.onTouch();
      });
    this.form.valueChanges.subscribe((value) => this.onChange(value));
  }

  // The DoCheck lifecycle code should be short or performance will be affected
  ngDoCheck() {
    if (this.ngControl) {
      this.updateErrorState();
    }
  }

  ngOnDestroy() {
    this.focusMonitor.stopMonitoring(this.input);
    this.stateChanges.complete();
  }
}
