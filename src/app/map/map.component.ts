import { Component, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, AbstractControl } from "@angular/forms";
import { NGXLogger } from "ngx-logger";
import * as L from 'leaflet';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
    componentName: String;
    buildingForm: FormGroup;
    private map: any;
    private building: String;

    constructor(public formBuilder: FormBuilder, private logger: NGXLogger) {
        this.componentName = "map";

        this.logger.info("Render map page", this.componentName, "constructor");
        this.buildingForm = this.formBuilder.group({
            description: ['']
        });
        this.building = "";
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
            const rawLatLngMsg = e.latlng.toString();
            const latLngMsgEnd = (rawLatLngMsg.split("LatLng("))[1];
            const latLngMsg = (latLngMsgEnd.split(")"))[0];
            const sepCoords = latLngMsg.split(", ");
            const lat = sepCoords[0];
            const lng = sepCoords[1];
            popup
                .setLatLng(e.latlng)
                .setContent("You clicked the map at " + rawLatLngMsg)
                .openOn(this.map);
            this.logger.info("Map clicked at " + rawLatLngMsg, this.componentName, "initMap");
            const line = document.createElement("tr");
            line.innerHTML = `<td>${this.building}</td><td>${lat}</td><td>${lng}</td>`;
            const loggingElement = document.querySelector("tbody")!
            loggingElement.appendChild(line);
        });
        this.logger.info("Render map", this.componentName, "initMap");
    }

    // Method to add pins to map
    addPin(lat: number, long: number): void {
        // const marker = L.marker([35.913, -79.0564]).addTo(this.map);
        this.logger.info("Add pin", this.componentName, "addPin");
    }

    changeBuilding(): void {
        const rawInfo = this.buildingForm.value;
        this.building = rawInfo.description;
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
