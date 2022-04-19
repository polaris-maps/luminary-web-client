import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { IssueService } from '../service/issue/issue.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Issue } from '../service/issue/issue';

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
    private issueService: IssueService
  ) {
    this.reportIssueForm = this.formBuilder.group({
      location: [''],
      description: [''],
      permanentStatus: ['']
    })
  }
  ngOnInit() { }

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