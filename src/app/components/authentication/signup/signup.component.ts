import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('registerForm') registerForm: NgForm;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }


  signUp() {
    this.authService
      .register(this.registerForm.value)
      .subscribe((data) => {
        console.log(data);

        this.router.navigate([ '/signin' ]);
      });
  }

}
