import { Component, OnInit } from '@angular/core';
import {
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
      name: new FormControl(null, Validators.required),
      age: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.min(18),
          Validators.max(65),
        ],
      ],
    });
  }

  onSubmit() {
    console.log(this.CustomerForm.value);
  }

  getName() {
    return this.CustomerForm.get('name');
  }
  getAge() {
    return this.CustomerForm.get('age');
  }
}
