import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

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
  }

  // Fetch Endpoint
  MyLocations(): void {
    const myLocationsBtn = document.getElementById("MyLocationsBtn");
    const allLocationsBtn = document.getElementById("AllLocationsBtn");
    if (myLocationsBtn && allLocationsBtn) {
      allLocationsBtn.style.fontWeight = "normal";
      myLocationsBtn.style.fontWeight = "bold";
    }
  }


}
