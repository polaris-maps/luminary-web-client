import { Component, AfterViewInit } from '@angular/core';
import { NGXLogger } from "ngx-logger";
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  componentName: String;
  private map: any;

  constructor(private logger: NGXLogger) {
    this.componentName = "map";

    this.logger.info("Render map page", this.componentName, "constructor");
  }

  // Map setup
  private initMap(): void {
    this.map = L.map('map', {
      center: [35.909382, -79.047623],
      zoom: 15.25
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    //const marker = L.marker([35.91099, -79.056366]).addTo(this.map);
    const popup = L.popup();
    this.map.on('click', (e: any) => {
      popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(this.map);
      this.logger.info("Map clicked at " + e.latlng.toString(), this.componentName, "initMap");
    });
    this.logger.info("Render map", this.componentName, "initMap");
  }

  // Method to add pins to map
  addPin(lat: number, long: number): void {
   // const marker = L.marker([35.913, -79.0564]).addTo(this.map);
   this.logger.info("Add pin", this.componentName, "addPin");
  }

  // Logic to covert building names from notifications to lat and long for addPin()
  getCoordsForBuildings(): Array<number> {
    this.logger.info("Get lat/long coordinates", this.componentName, "getCoordsForBuildings");
    return [0];
  }

  // TODO Hook up endpoint to fetch current pins based off notification board
  fetchCurrentPins(): void {
    this.logger.info("Fetch current pins", this.componentName, "fetchCurrentPins");
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
