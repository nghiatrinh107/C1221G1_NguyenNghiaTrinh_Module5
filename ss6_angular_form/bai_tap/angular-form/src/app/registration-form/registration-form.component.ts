import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  signUp: FormGroup;

  constructor() {
    this.signUp = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.min(6)]),
      confirmPassword: new FormControl("", [Validators.required]),
      country: new FormControl("", [Validators.required]),
      age: new FormControl("", [Validators.required, Validators.min(18)]),
      gender: new FormControl("", [Validators.required]),
      phone: new FormControl("", [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)])
    }, [this.validateConfirmPassword])
  }

  ngOnInit(): void {
  }

  validateConfirmPassword(pass: AbstractControl) {
    const pass1 = pass.get('password').value;
    const pass2 = pass.get('confirmPassword').value;
    if (pass2 !== pass1) {
      return {fail: true}
    } else {
      return null
    }
  }
}
