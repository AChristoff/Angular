import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {CustomValidationService} from '../../services/custom-validation.service';

@Component({
  selector: 'app-register-reactive',
  templateUrl: './register-reactive.component.html',
  styleUrls: ['./register-reactive.component.css']
})
export class RegisterReactiveComponent implements OnInit {
  form;

  constructor(
    private fb: FormBuilder,
    private customValidator: CustomValidationService
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        fullName: [
          '',
          [
            Validators.required,
            Validators.pattern(/[A-Z][a-z]+\s[A-Z][a-z]+/)
          ]
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
          ]
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`])[0-9a-zA-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]{6,40}$/),
          ]
        ],
        confirmPassword: [
          '',
          [
            Validators.required,
          ]
        ],
      },
      {
        validator: this.customValidator.passwordMatchValidator('password', 'confirmPassword')
      }
    );
  }

  onRegister() {
    console.log(this.form);
  }

  get f() {
    return this.form.controls;
  }

}
