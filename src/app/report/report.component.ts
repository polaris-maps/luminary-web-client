import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, AbstractControl } from "@angular/forms";
import { BuildingService } from '../service/building/building.service';
import { Building } from '../service/building/building';
import { IssueService } from '../service/issue/issue.service';
import { Issue } from '../service/issue/issue';
import { filter, map } from 'rxjs';
import { ElementSchemaRegistry } from '@angular/compiler';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent implements OnInit {
  reportIssueForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private buildingService: BuildingService,
    private issueService: IssueService
  ) {
    this.reportIssueForm = this.formBuilder.group({
      locationObject: [''],
      description: [''],
      permanentStatus: ['']
    })
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
    // rawInfo.latitude = rawInfo.locationObject.defaultLatitude
    // rawInfo.longitude = rawInfo.locationObject.defaultLongitude
    rawInfo.status = rawInfo.permanentStatus == "yes" ? "Permanent" : "Closed"
    // rawInfo.datetimeOpen = 0
    // rawInfo.datetimeClosed = rawInfo.permanentStatus == "no" ? "new Date()" : 0
    // rawInfo.datetimePermanent = rawInfo.permanentStatus == "yes" ? "new Date()" : 0
    rawInfo.votes = 0

    console.log(rawInfo)
    console.log(rawInfo.locationObject)

    // TODO: coerce raw info into form that can be submitted to addIssue

    // future release: select longitude/latitude on map

    this.issueService.addIssue(rawInfo).subscribe({
      next: (result: any) => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/'))
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log('Upvote added.');
        window.location.reload();
      }
    })
  }
}