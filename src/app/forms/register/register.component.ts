import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  phoneCodes: Array<string> = [
    '+359', '+971', '+701', '+44'
  ];

  jobTitles: Array<string> = [
    'Designer', 'Manager', 'Developer', 'Accounting', 'Other'
  ];

  @ViewChild('regForm')
  form: NgForm;
  formData = {};

  constructor() {
  }
  ngOnInit(): void {
  }

  onRegister(data) {
    console.log(this.formData);
    this.form?.reset();
  }

}
