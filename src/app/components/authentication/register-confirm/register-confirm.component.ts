import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {CustomValidationService} from '../../../core/services/custom-validation.service';
import {AuthService} from '../../../core/services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-register-confirm',
  templateUrl: './register-confirm.component.html',
  styleUrls: ['./register-confirm.component.scss']
})
export class RegisterConfirmComponent implements OnInit {

  form;
  hidePass: any = true;
  hideConfPass: any = true;
  spinner: any = false;
  token;

  constructor(
    private fb: FormBuilder,
    private customValidator: CustomValidationService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[A-Za-z]{2,20}$/)
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
    this.token = this.route.snapshot.params['token'];
    const regData = {
      name: this.form.controls.username.value,
      password: this.form.controls.password.value,
    };
    this.authService.registerConfirm(regData, this.token).subscribe((data) => {
      this.spinner = false;
      localStorage.setItem('token', data['token']);
      localStorage.setItem('username', data['username']);
      this.router.navigate(['/home']);
    });
  }

  get f() {
    return this.form.controls;
  }

}
