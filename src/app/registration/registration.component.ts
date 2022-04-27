import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  logger: LoginServiceService
  router: Router;
  constructor(loggerService: LoginServiceService, routerAng: Router) { 
    this.logger = loggerService;
    this.router = routerAng;
  }

  ngOnInit(): void {
  }

   // TODO Hookup endpoint from Database to submit new information 
   submitReport(data: any): void {
    console.log(data);
    
    // check if already have account in database, if not create one
    this.logger.isloggedIn = true;
    this.router.navigate(['/']);
  }
}
