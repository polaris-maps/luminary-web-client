import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login/login.service';
import { NGXLogger } from "ngx-logger";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  componentName: String
  login: LoginService
  router: Router

  constructor(loggerService: LoginService, routerAng: Router, private logger: NGXLogger) { 
    this.componentName = "signin";

    this.login = loggerService;
    this.router = routerAng;

    this.logger.info("Render sign-in page", this.componentName, "constructor");
  }

  ngOnInit(): void {
  }

  // TODO Hookup endpoint from Database to submit new information 
  submitInfo(data: any): void {
    console.log(data);

    this.logger.info("Sign-in info submitted", this.componentName, "submitInfo");

    // TODO add database call to check if information is in database, if true set logged in to true and navigate home.  If false throw error
    this.login.isloggedIn = true;
    this.router.navigate(['/']);
  }
}
