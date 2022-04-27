import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logger: LoginServiceService;
  router: Router;
  constructor(loggerService: LoginServiceService, routerAng: Router) { 
    this.logger = loggerService;
    this.router = routerAng;
  }

  ngOnInit(): void {
  }

  closeMenu(): void {
    document.getElementById("navabar-toggler-button")?.setAttribute("aria-expanded", "false");
    document.getElementById("navabar-toggler-button")?.setAttribute("class", "navbar-toggler collapsed");
    document.getElementById("navbarSupportedContent")?.setAttribute("class", "navbar-collapse collapse");
    console.log(this.logger.isloggedIn);
  }


  determineLogin(): void {
    if (this.logger.isloggedIn) {
      this.router.navigate(['/account']);
    } else {
      this.router.navigate(['/signin'])
    }
  }
}
