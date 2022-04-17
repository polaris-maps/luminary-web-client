import { Component, OnInit } from '@angular/core';
import { IssueService } from '../service/issue/issue.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  Issues: any = [];
  handleUpdateResponse: any;
  handleError: any;

  constructor(private issueService: IssueService) { }
  // Angular Init method, retrieve all notifications from database
  ngOnInit(): void {
    this.issueService.getIssues().subscribe(res => {
      this.Issues = res;
    });
  }

  // TODO Method to retrive only user filtered notifications from database
  fetchMyNotifications(): void { }

  // Upvote method send data to database
  upvote(id: string): void {
    console.log(id)

    // TODO: check if id in list of issues user has upvoted

    this.issueService.getIssue(id).subscribe(res => {
      console.log("Number votes before upvote: " + res.votes)

      this.issueService.updateIssue(id, {
        "votes": res.votes + 1
      }).subscribe({
        next: (result: any) => {
          console.log(result);
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => {
          console.log('Upvote added.');
          window.location.reload();
        }
      })
    })
  }

  // Downvote method to send data to datebase
  downvote(id: string): void {
    console.log(id)

    // TODO: check if id in list of issues user has upvoted

    this.issueService.getIssue(id).subscribe(res => {
      console.log("Number votes before upvote: " + res.votes)

      this.issueService.updateIssue(id, {
        "votes": res.votes - 1
      }).subscribe({
        next: (result: any) => {
          console.log(result);
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => {
          console.log('Downvote completed.');
          window.location.reload();
        }
      })
    })
  }
}
