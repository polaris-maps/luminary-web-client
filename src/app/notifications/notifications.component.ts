import { Component, OnInit } from '@angular/core';
import { IssueService } from '../service/issue/issue.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  Issues:any = [];
  constructor(private crudService: IssueService) { }
  // Angular Init method, retrieve all notifications from database
  ngOnInit(): void {
    this.crudService.getIssues().subscribe(res => {
      console.log(res)
      this.Issues =res;
    });  
  }
 
  // TODO Downvote method to send data to datebase
  downvote(): void {
    console.log("Placeholder Downvote")
  }

  // TODO Method to retrive all notifications from database
  fetchAllNotifications(): void {}

  // TODO Method to retrive only user filtered notifications from database
  fetchMyNotifications(): void {}

  // TODO update page with new notifications set retrieved
  updatePage(): void {}

  // TODO Upvote method send data to database
  upvote(): void {
    console.log("Placeholder Upvote")
  }


}
