import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  logger: LoginServiceService
  router: Router;
  constructor(loggerService: LoginServiceService, routerAng: Router) { 
    this.logger = loggerService;
    this.router = routerAng;
  }

  deleteAccount(): void {
    //TODO make call to delete login from database
    this.logger.isloggedIn = false;
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
  }

  logOut(): void {
    this.logger.isloggedIn = false;
    this.router.navigate(['/'])
  }
}
