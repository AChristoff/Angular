import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  username: string;
  constructor(
    public authService: AuthService,
    private router: Router
  ) {  }

  ngOnInit() {
    //////
    localStorage.getItem('username');
    this.authService.currentUserData.subscribe((data) => {
      this.username = data;
    });
    //////
  }

  logout() {
    this.authService.logout();
    this.router.navigate([ '/home' ]);
  }
}
