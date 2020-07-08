import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  name: string;
  constructor(
    public authService: AuthService,
    private router: Router
  ) {  }

  @Input() username: string;

  ngOnInit() {
    this.name = this.username;
  }

  logout() {
    this.authService.logout();
    this.router.navigate([ '/home' ]);
  }
}
