import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor() { }

 
  // TODO Downvote method to send data to datebase
  downvote(): void {}

  // TODO Method to retrive all notifications from database
  fetchAllNotifications(): void {}

  // TODO Method to retrive only user filtered notifications from database
  fetchMyNotifications(): void {}
  
  // Angular Init method, Fetch post user has already upvoted
  ngOnInit(): void {}

  // TODO update page with new notifications set retrieved
  updatePage(): void {}

  // TODO Upvote method send data to database
  upvote(): void {}


}
