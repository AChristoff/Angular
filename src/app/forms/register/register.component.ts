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

  constructor() {
  }
  ngOnInit(): void {
  }

  onRegister(data) {
    console.log(data);
    console.log(this.form);
    this.form?.reset();
  }

}
