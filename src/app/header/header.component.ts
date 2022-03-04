import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closeMenu(): void {
    document.getElementById("navabar-toggler-button")?.setAttribute("aria-expanded", "false");
    document.getElementById("navabar-toggler-button")?.setAttribute("class", "navbar-toggler collapsed");
    document.getElementById("navbarSupportedContent")?.setAttribute("class", "navbar-collapse collapse"); 
  }
}
