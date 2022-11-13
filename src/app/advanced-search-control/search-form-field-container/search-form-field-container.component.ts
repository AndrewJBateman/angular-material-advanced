import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-form-field-container',
  templateUrl: './search-form-field-container.component.html',
  styleUrls: ['./search-form-field-container.component.scss'],
})
export class SearchFormFieldContainerComponent implements OnInit {
  formControl = new UntypedFormControl(
    { value: { scope: '', query: '' }, disabled: true },
    AdvancedSearchValidator
  );

  constructor() { }

  ngOnInit(): void { }
}
// if validation function return null then control is valid, otherwise it is invalid
function AdvancedSearchValidator(control: UntypedFormControl) {
  return control.value.scope !== null && control.value.query !== ''
    ? null
    : {
      validateSearch: {
        valid:true,
      },
    };
}
