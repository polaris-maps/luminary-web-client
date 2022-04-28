import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, AbstractControl } from "@angular/forms";
import { BuildingService } from '../service/building/building.service';
import { Building } from '../service/building/building';
import { IssueService } from '../service/issue/issue.service';
import { Issue } from '../service/issue/issue';
import { filter, map } from 'rxjs';
import { ElementSchemaRegistry } from '@angular/compiler';
import { NGXLogger } from "ngx-logger";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent implements OnInit {
  componentName: String;
  reportIssueForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private buildingService: BuildingService,
    private issueService: IssueService,
    private logger: NGXLogger
  ) {
    this.componentName = "report";

    this.reportIssueForm = this.formBuilder.group({
      locationObject: [''],
      description: [''],
      permanentStatus: ['']
    });

    this.logger.info("Render report page", this.componentName, "constructor");
  }

  // Values are hardcoded for speed, but future revisions will not hardcode values
  campusModel = {
    name: 'UNC Chapel Hill'
  };

  campuses = [
    {
      name: 'UNC Chapel Hill'
    }
  ]

  buildings = []

  filterBuildingsByCampus(campusName: String) {
    this.logger.info("Buildings filtered by campus: " + campusName, this.componentName, "filterBuildingsByCampus");
  
    return this.buildings.filter((item: any) => item.campus == campusName);
    }

  ngOnInit() {
    this.buildingService.getBuildings().subscribe((data: any) => {
      this.buildings = data;
    })
  }

  onSubmit() {
    const rawInfo = this.reportIssueForm.value;
    rawInfo.location = rawInfo.locationObject.name
    rawInfo.latitude = rawInfo.locationObject.defaultLatitude
    rawInfo.longitude = rawInfo.locationObject.defaultLongitude
    rawInfo.status = rawInfo.permanentStatus == "yes" ? "Permanent" : "Closed"
    rawInfo.datetimeOpen = new Date().getTime()
    rawInfo.datetimeClosed = rawInfo.permanentStatus == "no" ? new Date().getTime() : 0
    rawInfo.datetimePermanent = rawInfo.permanentStatus == "yes" ? new Date().getTime() : 0
    rawInfo.votes = 0

    this.logger.info("Report of issue submitted", this.componentName, "onSubmit");
    
    // future release: select longitude/latitude on map

    this.issueService.addIssue(rawInfo).subscribe({
      next: (result: any) => {
        this.ngZone.run(() => this.router.navigateByUrl('/'))
      },
      error: (err: any) => {
        this.logger.error("Error in adding issue", this.componentName, err);
      },
      complete: () => {
        window.location.reload();
      }
    })
  }
}