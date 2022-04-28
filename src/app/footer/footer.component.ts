import { Component, OnInit } from '@angular/core';
import { NGXLogger } from "ngx-logger";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  componentName: String;

  constructor(private logger: NGXLogger) {
    this.componentName = "footer";

    this.logger.info("Render footer", this.componentName, "constructor");
  }

  ngOnInit(): void {
  }

}
