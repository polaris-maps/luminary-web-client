import { Injectable } from '@angular/core';
import { INGXLoggerMetadata, NgxLoggerLevel, NGXLoggerServerService } from "ngx-logger";
import { customLogger } from './custom-logger';

@Injectable({
  providedIn: 'root'
})
export class CustomLoggerService extends NGXLoggerServerService {
  /**
   * Customise the data sent to the API
   * @param metadata the data provided by NGXLogger
   * @returns the data that will be sent to the API in the body
   */
   public override customiseRequestBody(metadata: INGXLoggerMetadata): any {
    var body: customLogger;
    body = { ...metadata };
    body['levelName'] = NgxLoggerLevel[metadata.level];

    // note, for the example we log the body but in a real case the log is useless
    console.log('Customised body is', body);

    return body;
  }
}
