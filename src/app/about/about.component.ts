import { Component, OnInit } from '@angular/core';
import { NGXLogger } from "ngx-logger";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  componentName: String;

  constructor(private logger: NGXLogger) {
    this.componentName = "header";

    this.logger.info("About page rendered", this.componentName, "constructor");
  }

  ngOnInit(): void {
  }

}
