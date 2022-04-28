import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { NGXLogger } from "ngx-logger";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  componentName: String;
  login: LoginServiceService
  router: Router;
  constructor(loginService: LoginServiceService, routerAng: Router, private logger: NGXLogger) {
    this.componentName = "registration";

    this.login = loginService;
    this.router = routerAng;

    this.logger.info("Render registration page", this.componentName, "constructor");
  }

  ngOnInit(): void {
  }

  // TODO Hookup endpoint from Database to submit new information 
  submitReport(data: any): void {
    console.log(data);

    // check if already have account in database, if not create one
    this.login.isloggedIn = true;
    this.router.navigate(['/']);

    this.logger.info("Report submitted", this.componentName, "submitReport");
  }
}
