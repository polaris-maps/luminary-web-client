import { Component, OnInit } from '@angular/core';
import { IssueService } from '../service/issue/issue.service';
import { NGXLogger } from "ngx-logger";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  componentName: String;
  Issues: any = [];
  handleUpdateResponse: any;
  handleError: any;

  constructor(private issueService: IssueService, private logger: NGXLogger) {
    this.componentName = "notifications";

    this.logger.info("Render notifications page", this.componentName, "constructor");
  }
  // Angular Init method, retrieve all notifications from database
  ngOnInit(): void {
    this.issueService.getIssues().subscribe(res => {
      this.Issues = res;
    });
  }

  // TODO Method to retrive only user filtered notifications from database
  fetchMyNotifications(): void {
    this.logger.info("Retrieve user filtered notifications", this.componentName, "fetchMyNotifications");
  }

  // Upvote method send data to database
  upvote(id: string): void {
    // TODO: check if id in list of issues user has upvoted

    this.issueService.getIssue(id).subscribe(res => {
      this.issueService.updateIssue(id, {
        "votes": res.votes + 1
      }).subscribe({
        next: (result: any) => {
          // console.log(result);
        },
        error: (err: any) => {
          this.logger.error("Cannot upvote", this.componentName, "upvote");
        },
        complete: () => {
          this.logger.log("Upvote added", this.componentName, "upvote");
          window.location.reload();
        }
      })
    })
  }

  // Downvote method to send data to datebase
  downvote(id: string): void {
    // TODO: check if id in list of issues user has upvoted

    this.issueService.getIssue(id).subscribe(res => {
      this.issueService.updateIssue(id, {
        "votes": res.votes - 1
      }).subscribe({
        next: (result: any) => {
          // console.log(result);
        },
        error: (err: any) => {
          this.logger.error("Cannot downvote", this.componentName, "downvote");
        },
        complete: () => {
          this.logger.log("Downvote completed", this.componentName, "downvote");
          window.location.reload();
        }
      })
    })
  }
}
