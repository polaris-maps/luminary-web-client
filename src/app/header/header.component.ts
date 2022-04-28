import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login/login.service';
import { NGXLogger } from "ngx-logger";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login: LoginService;
  router: Router;
  componentName: String;

  constructor(loginService: LoginService, routerAng: Router, private logger: NGXLogger) { 
    this.componentName = "header";

    this.login = loginService;
    this.router = routerAng;

    this.logger.info("Render header", this.componentName, "constructor");
  }

  ngOnInit(): void {
  }

  closeMenu(): void {
    document.getElementById("navabar-toggler-button")?.setAttribute("aria-expanded", "false");
    document.getElementById("navabar-toggler-button")?.setAttribute("class", "navbar-toggler collapsed");
    document.getElementById("navbarSupportedContent")?.setAttribute("class", "navbar-collapse collapse");
    console.log(this.login.isloggedIn);
    this.logger.info("Menu toggled", this.componentName, "closeMenu");
  }


  determineLogin(): void {
    if (this.login.isloggedIn) {
      this.logger.info("User logged in, navigate to account", this.componentName, "determineLogin");
      this.router.navigate(['/account']);
    } else {
      this.router.navigate(['/signin']);
      this.logger.info("User not logged in, navigate to signin", this.componentName, "determineLogin");
    }
  }
}
