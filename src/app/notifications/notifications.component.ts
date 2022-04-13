import { Component, OnInit } from '@angular/core';
import { IssueService } from '../service/issue/issue.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  Issues:any = [];
  constructor(private issueService: IssueService) { }
  // Angular Init method, retrieve all notifications from database
  ngOnInit(): void {
    this.issueService.getIssues().subscribe(res => {
      this.Issues = res;
    });
  }
 
  // TODO Method to retrive only user filtered notifications from database
  fetchMyNotifications(): void {}

  // TODO Upvote method send data to database
  upvote(): void {
    // this.issueService.updateIssue().subscribe(res => {
    //   this.Issues = res;
    // });
  }

  // TODO Downvote method to send data to datebase
  downvote(): void {
    console.log("Placeholder Downvote")
  }
}
