import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  username: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
    this.authService.changeUserData(this.username);
  }
}
