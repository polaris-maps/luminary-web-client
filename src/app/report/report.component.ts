import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, AbstractControl } from "@angular/forms";
import { BuildingService } from '../service/building/building.service';
import { Building } from '../service/building/building';
import { IssueService } from '../service/issue/issue.service';
import { Issue } from '../service/issue/issue';
import { filter, map } from 'rxjs';

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



//   mainCategory = {
//     title: 'abc',
//     id: 1
//   };
//   subCategory = {
//     title: 'xxx',
//     parentId: 1
//   };

//   mainGroups = [
//     {
//       title: 'abc',
//       id: 1
//     },
//     {
//       title: 'def',
//       id: 2
//     }
//   ]

//   subCategories = [
//     {
//       title: 'xxx',
//       parentId: 1
//     },
//     {
//       title: 'yyy',
//       parentId: 1
//     },
//     {
//       title: 'zzz',
//       parentId: 2
//     }
//   ]

//   filterSubById(id: Number) {
//     return this.subCategories.filter(item => item.parentId === id);
// }



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
    console.log(rawInfo)

    // TODO: coerce raw info into form that can be submitted to addIssue

    // future release: select longitude/latitude on map

    // this.issueService.addIssue(this.reportIssueForm.value).subscribe({
    //   next: (result: any) => {
    //     console.log('Data added successfully!')
    //     this.ngZone.run(() => this.router.navigateByUrl('/'))
    //   },
    //   error: (err: any) => {
    //     console.log(err);
    //   },
    //   complete: () => {
    //     console.log('Upvote added.');
    //     window.location.reload();
    //   }
    // })
  }
}