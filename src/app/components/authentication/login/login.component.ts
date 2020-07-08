import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, NgForm, Validators} from '@angular/forms';

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

  onRegister() {
    const logData = {
      email: this.form.controls.email.value,
      password: this.form.controls.password.value,
    };
    console.log(logData);
    this.authService.login(logData).subscribe((data) => {
      localStorage.setItem('token', data['token']);
      localStorage.setItem('username', data['user']['name']);
      this.router.navigate(['/home']);
    });
  }

  get f() {
    return this.form.controls;
  }

}
