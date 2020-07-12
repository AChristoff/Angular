import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {CustomValidationService} from '../../../core/services/custom-validation.service';

import {AuthService} from '../../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form;
  hidePass: any = true;
  hideConfPass: any = true;
  spinner: any = false;
  confirm: boolean;
  email: string;

  constructor(
    private fb: FormBuilder,
    private customValidator: CustomValidationService,
    private authService: AuthService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.confirm = false;
    this.form = this.fb.group(
      {
        email: [
          '',
          [
            Validators.required,
            Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
          ]
        ]
      }
    );
  }

  onRegister() {
    this.spinner = true;
    this.email = this.form.controls.email.value;
    const regData = {
      email: this.form.controls.email.value,
    };
    this.authService
      .register(regData)
      .subscribe((data) => {
        this.spinner = false;
        this.confirm = true;
      });
  }

  get f() {
    return this.form.controls;
  }

}
