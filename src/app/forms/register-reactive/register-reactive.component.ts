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
        Validators.required,
        Validators.email
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
