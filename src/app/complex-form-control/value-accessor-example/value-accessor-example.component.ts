import { UntypedFormGroup, UntypedFormBuilder, UntypedFormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value-accessor-example',
  templateUrl: './value-accessor-example.component.html',
  styleUrls: ['./value-accessor-example.component.scss'],
})
export class ValueAccessorExampleComponent implements OnInit {
  form: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      itemName: new UntypedFormControl(),
      isLocked: new UntypedFormControl(false),
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
