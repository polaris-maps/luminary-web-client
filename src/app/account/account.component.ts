import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { NGXLogger } from "ngx-logger";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  login: LoginServiceService
  router: Router;
  componentName: String;

  constructor(loginService: LoginServiceService, routerAng: Router, private logger: NGXLogger) {
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
