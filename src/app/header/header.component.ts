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
  componentName: string;

  constructor(loginService: LoginServiceService, routerAng: Router, private logger: NGXLogger) { 
    this.login = loginService;
    this.router = routerAng;
    this.componentName = "header"

    this.logger.info("Header rendered", this.componentName);
  }

  ngOnInit(): void {
  }

  closeMenu(): void {
    document.getElementById("navabar-toggler-button")?.setAttribute("aria-expanded", "false");
    document.getElementById("navabar-toggler-button")?.setAttribute("class", "navbar-toggler collapsed");
    document.getElementById("navbarSupportedContent")?.setAttribute("class", "navbar-collapse collapse");
    console.log(this.login.isloggedIn);
    this.logger.info("Menu toggled", this.componentName);
  }


  determineLogin(): void {
    if (this.login.isloggedIn) {
      this.logger.info("User logged in, navigate to account", this.componentName);
      this.router.navigate(['/account']);
    } else {
      this.router.navigate(['/signin']);
      this.logger.info("User not logged in, navigate to signin", this.componentName);
    }
  }
}
