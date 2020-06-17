import {Component, OnInit} from '@angular/core';

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

  constructor() {
  }

  ngOnInit(): void {
  }

  onRegister(data) {
    console.log(data);
  }

}
