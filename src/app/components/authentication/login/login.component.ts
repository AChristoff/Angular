import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

import {AuthService} from '../../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form;
  hide: any = true;
  spinner: any = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group(
      {
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
      }
    );
  }

  onLogin() {
    this.spinner = true;
    const logData = {
      email: this.form.controls.email.value,
      password: this.form.controls.password.value,
    };
    this.authService.login(logData).subscribe(
      (data) => {
        console.log(data);
        this.spinner = false;
        localStorage.setItem('token', data['token']);
        localStorage.setItem('username', data['username']);
        this.router.navigate(['/home']);
      },
      (error) => {
        this.spinner = false;
        console.log(error);
      });
  }

  get f() {
    return this.form.controls;
  }

}
