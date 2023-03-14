import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  componentName: String
  login: LoginService
  router: Router

  constructor(loginService: LoginService, routerAng: Router) { 
    this.componentName = "signin";

    this.login = loginService;
    this.router = routerAng;
  }

  ngOnInit(): void {
  }

  // TODO Hookup endpoint from Database to submit new information 
  submitInfo(data: any): void {
    console.log(data);

    // TODO add database call to check if information is in database, if true set logged in to true and navigate home.  If false throw error
    this.login.isloggedIn = true;
    this.router.navigate(['/']);
  }
}
