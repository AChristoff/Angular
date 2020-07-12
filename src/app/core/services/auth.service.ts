import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly loginUrl = 'http://localhost:3000/user/login';
  private readonly registerUrl = 'http://localhost:3000/user/register';
  private readonly registerConfirmUrl = 'http://localhost:3000/user/register/confirm/';
  username = localStorage.getItem('username');
  private userDataSource = new BehaviorSubject<string>(this.username);
  currentUserData = this.userDataSource.asObservable();

  constructor(private http: HttpClient) {
  }
  changeUserData(data: string) {
    this.userDataSource.next(data);
  }

  register(body) {
    return this.http.post(this.registerUrl, body);
  }

  registerConfirm(body, token) {
    return this.http.put(this.registerConfirmUrl + token, body);
  }

  login(body) {
    return this.http.post(this.loginUrl, body);
  }

  logout() {
    localStorage.clear();
  }

  isAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  getToken() {
    let token = localStorage.getItem('token');
    return token;
  }
}
