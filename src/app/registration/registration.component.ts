import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login/login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  componentName: String;
  login: LoginService
  router: Router;
  constructor(loginService: LoginService, routerAng: Router) {
    this.componentName = "registration";

    this.login = loginService;
    this.router = routerAng;
  }

  ngOnInit(): void {
  }

  // TODO Hookup endpoint from Database to submit new information 
  submitReport(data: any): void {
    // check if already have account in database, if not create one
    this.login.isloggedIn = true;
    this.router.navigate(['/']);
  }
}
