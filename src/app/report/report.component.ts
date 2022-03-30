import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor() { }
  
  // Angular Init method, Fetch post user has already upvoted
  ngOnInit(): void {}

  // TODO Hookup endpoint from Database to submit new information 
  submitReport(data: any): void {
    console.log(data);
  }
  
}
