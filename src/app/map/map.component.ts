import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit { 
  
  private map: any;
 
  // Map setup
  private initMap(): void {
    this.map = L.map('map', {
      center: [ 35.91099, -79.056366 ],
      zoom: 14
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    const marker = L.marker([ 35.91099, -79.056366]).addTo(this.map);
    const popup = L.popup();
    this.map.on('click', (e: any) => {
      popup
      .setLatLng(e.latlng)
      .setContent("You clicked the map at " + e.latlng.toString())
      .openOn(this.map);
    });
    
  }

  constructor() { }

  // Method to add pins to map
  addPin(long: number, lat: number): void {
    const marker = L.marker([ 35.913, -79.0564]).addTo(this.map);
  }

  // Logic to covert building names from notifications to long ang lat for addPin()
  getCordsForBuildings(): Array<number> {
    return [0];
  }

  // TODO Hook up endpoint to fetch current pins based off notification board
  fetchCurrentPins(): void {
    
  }

  ngAfterViewInit(): void {
    this.initMap();
  }


}
