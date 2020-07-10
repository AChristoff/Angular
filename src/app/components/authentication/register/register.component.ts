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

  constructor(
    private fb: FormBuilder,
    private customValidator: CustomValidationService,
    private authService: AuthService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.pattern(/[A-Za-z]{2,20}/)
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
    this.spinner = true;
    const regData = {
      name: this.form.controls.name.value,
      email: this.form.controls.email.value,
      password: this.form.controls.password.value,
    };
    this.authService
      .register(regData)
      .subscribe((data) => {
        this.spinner = false;
        this.router.navigate(['/user/login']);
      });
  }

  // onRegister() {
  //   const regData = {
  //     email: this.form.controls.email.value,
  //     password: this.form.controls.password.value,
  //     confirmPassword: this.form.controls.password.value,
  //   };
  //   console.log(regData);
  //   this.authService.login(regData).subscribe((data) => {
  //     localStorage.setItem('token', data['token']);
  //     localStorage.setItem('username', data['user']['name']);
  //     this.router.navigate(['/home']);
  //   });
  // }

  get f() {
    return this.form.controls;
  }

}
