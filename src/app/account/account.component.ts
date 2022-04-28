import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login/login.service';
import { NGXLogger } from "ngx-logger";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  componentName: String
  login: LoginService
  router: Router

  constructor(loginService: LoginService, routerAng: Router, private logger: NGXLogger) {
    this.componentName = "account";

    this.login = loginService;
    this.router = routerAng;

    this.logger.info("Render account page", this.componentName, "constructor");
  }

  deleteAccount(): void {
    //TODO make call to delete login from database
    this.login.isloggedIn = false;
    this.router.navigate(['/']);

    this.logger.info("Delete account", this.componentName, "deleteAccount");
  }

  ngOnInit(): void {
  }

  logOut(): void {
    this.login.isloggedIn = false;
    this.router.navigate(['/']);

    this.logger.info("Log out", this.componentName, "logOut");
  }
}
