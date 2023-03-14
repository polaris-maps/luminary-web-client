import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login/login.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  componentName: String
  login: LoginService
  router: Router

  constructor(loginService: LoginService, routerAng: Router) {
    this.componentName = "account";

    this.login = loginService;
    this.router = routerAng;
  }

  deleteAccount(): void {
    //TODO make call to delete login from database
    this.login.isloggedIn = false;
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

  logOut(): void {
    this.login.isloggedIn = false;
    this.router.navigate(['/']);
  }
}
