import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { NGXLogger } from "ngx-logger";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login: LoginServiceService;
  router: Router;
  constructor(loggerService: LoginServiceService, routerAng: Router, private logger: NGXLogger) { 
    this.login = loggerService;
    this.router = routerAng;
    this.logger.info("Header component: Header rendered", "test test");
  }

  ngOnInit(): void {
  }

  closeMenu(): void {
    document.getElementById("navabar-toggler-button")?.setAttribute("aria-expanded", "false");
    document.getElementById("navabar-toggler-button")?.setAttribute("class", "navbar-toggler collapsed");
    document.getElementById("navbarSupportedContent")?.setAttribute("class", "navbar-collapse collapse");
    console.log(this.login.isloggedIn);
    this.logger.info("Header component: Menu toggled", "test test");
  }


  determineLogin(): void {
    if (this.login.isloggedIn) {
      this.logger.info("Header component: User logged in, navigate to account", "test test");
      this.router.navigate(['/account']);
    } else {
      this.router.navigate(['/signin']);
      this.logger.info("Header component: User not logged in, navigate to signin", "test test");
    }
  }
}
