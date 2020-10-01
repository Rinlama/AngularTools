import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  CustomerForm: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.CustomerForm = this.fb.group({
      name: new FormControl('Sam'),
      // cellPhone: this.getPhoneFromGroup(),
      // homePhone: this.getPhoneFromGroup(),
      email: new FormControl('', [Validators.email]),
      cellPhones: this.fb.array([this.getPhoneFromGroup()]),
    });
  }

  getPhoneFromGroup() {
    return this.fb.group({
      area: new FormControl(''),
      prefix: new FormControl(''),
      line: new FormControl(''),
    });
  }

  getCellPhones() {
    return this.CustomerForm.get('cellPhones') as FormArray;
  }

  addPhone() {
    this.getCellPhones().push(this.getPhoneFromGroup());
  }
  removeCellPhone(i: number) {
    this.getCellPhones().removeAt(i);
  }

  onSubmit() {
    console.log(this.CustomerForm.value);
  }
}
