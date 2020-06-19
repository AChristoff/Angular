import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-reactive',
  templateUrl: './register-reactive.component.html',
  styleUrls: ['./register-reactive.component.css']
})
export class RegisterReactiveComponent implements OnInit {
  form;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
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
          Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        ]
      ],
    });
  }

  onRegister() {
    console.log(this.form);
  }

  get f() {
    return this.form.controls;
  }

}
