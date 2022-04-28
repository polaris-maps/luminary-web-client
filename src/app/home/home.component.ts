import { Component, OnInit } from '@angular/core';
import { NGXLogger } from "ngx-logger";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  componentName: String;

  constructor(private logger: NGXLogger) {
    this.componentName = "home";

    this.logger.info("Render home page", this.componentName, "constructor");
  }

  ngOnInit(): void {
    const allLocationsBtn = document.getElementById("AllLocationsBtn");
    if (allLocationsBtn) {
      allLocationsBtn.style.fontWeight = "bold";
    }
  }

  // Fetch Endpoint to filter
  AllLocations(): void {
    const myLocationsBtn = document.getElementById("MyLocationsBtn");
    const allLocationsBtn = document.getElementById("AllLocationsBtn");
    if (myLocationsBtn && allLocationsBtn) {
      allLocationsBtn.style.fontWeight = "bold";
      myLocationsBtn.style.fontWeight = "normal";
    }

    this.logger.info("Show all locations", this.componentName, "AllLocations");
  }

  // Fetch Endpoint
  MyLocations(): void {
    const myLocationsBtn = document.getElementById("MyLocationsBtn");
    const allLocationsBtn = document.getElementById("AllLocationsBtn");
    if (myLocationsBtn && allLocationsBtn) {
      allLocationsBtn.style.fontWeight = "normal";
      myLocationsBtn.style.fontWeight = "bold";
    }

    this.logger.info("Show my locations", this.componentName, "MyLocations");
  }
}
