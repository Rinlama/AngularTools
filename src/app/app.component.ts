import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  FormArray,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  customerForm: FormGroup;
  dynamicForms: FormArray;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        ],
      ],
      age: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.min(18),
          Validators.max(65),
        ],
      ],
      cellPhone: this.newPhone(),
      homePhone: this.newPhone(),
      dynamicPhone: this.fb.array([this.addPhoneGroup()]),
    });
  }

  getFirstName() {
    return this.customerForm.get('firstName');
  }
  getPassword() {
    return this.customerForm.get('password');
  }
  getAge() {
    return this.customerForm.get('age');
  }

  addPhoneGroup() {
    return this.fb.group({
      area: [],
      prefix: [],
      line: [],
    });
  }

  getPhoneArray(): FormArray {
    return this.customerForm.get('dynamicPhone') as FormArray;
  }

  addPhone() {
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: [],
    });
    this.getPhoneArray().push(phone);
  }

  deletePhone(i) {
    this.getPhoneArray().removeAt(i);
  }

  newPhone() {
    return this.fb.group({
      area: [],
      prefix: [],
      line: [],
    });
  }
  submitHandler() {
    console.log(this.customerForm.value);
  }
}
