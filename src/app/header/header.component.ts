import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login: LoginService;
  router: Router;
  componentName: String;

  constructor(loginService: LoginService, routerAng: Router) { 
    this.componentName = "header";

    this.login = loginService;
    this.router = routerAng;
  }

  ngOnInit(): void {
  }

  closeMenu(): void {
    document.getElementById("navabar-toggler-button")?.setAttribute("aria-expanded", "false");
    document.getElementById("navabar-toggler-button")?.setAttribute("class", "navbar-toggler collapsed");
    document.getElementById("navbarSupportedContent")?.setAttribute("class", "navbar-collapse collapse");
    console.log(this.login.isloggedIn);
  }


  determineLogin(): void {
    if (this.login.isloggedIn) {
      this.router.navigate(['/account']);
    } else {
      this.router.navigate(['/signin']);
    }
  }
}
