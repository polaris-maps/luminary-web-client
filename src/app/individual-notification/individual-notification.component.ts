import { Component, OnInit } from '@angular/core';
import { NGXLogger } from "ngx-logger";

@Component({
  selector: 'app-individual-notification',
  templateUrl: './individual-notification.component.html',
  styleUrls: ['./individual-notification.component.css']
})
export class IndividualNotificationComponent implements OnInit {
  componentName: String;

  constructor(private logger: NGXLogger) {
    this.componentName = "individual-notification";

    this.logger.info("Render individual notification page", this.componentName, "constructor");
  
  }

  ngOnInit(): void {
  }

}
