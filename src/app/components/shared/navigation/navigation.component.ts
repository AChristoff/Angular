import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  userName: string;
  constructor(
    public authService: AuthService,
    private router: Router
  ) {  }

  ngOnInit() {
    //////
    this.authService.currentUserData.subscribe((data) => {
      this.userName = data;
    });
    //////
  }

  logout() {
    this.authService.logout();
    this.router.navigate([ '/home' ]);
  }
}
