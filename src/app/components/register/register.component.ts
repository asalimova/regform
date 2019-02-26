import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';

import { from } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  formReg = new FormGroup({
    email: new FormControl('aaa', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    password2: new FormControl('', [Validators.required])
  },
  Match);
  constructor() {}

  onSubmit() {
    alert(
      this.formReg.controls.email.value +
        ' ' +
        this.formReg.controls.password.value
    );
  }
 
}

export function Match (control: AbstractControl): ValidationErrors {
    console.log(control.get('password').value);
    console.log(control.get('password2').value);
    if (control.get('password').value === control.get('password2').value) {
      return null;
    }
    return {
      matchError: {
        value: 'Passwords do not match'
      }
    };
}
