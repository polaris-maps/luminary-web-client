import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoggerModule, NgxLoggerLevel, TOKEN_LOGGER_SERVER_SERVICE } from "ngx-logger";
import { environment } from '../environments/environment';
import { CustomLoggerService } from './service/customLogger/custom-logger.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ReportComponent } from './report/report.component';
import { MapComponent } from './map/map.component';
import { IndividualNotificationComponent } from './individual-notification/individual-notification.component';
import { SigninComponent } from './signin/signin.component';
import { RegistrationComponent } from './registration/registration.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotificationsComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ReportComponent,
    MapComponent,
    IndividualNotificationComponent,
    SigninComponent,
    RegistrationComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LoggerModule.forRoot({
      serverLoggingUrl: environment.apiUrl + '/clientLog/add',
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.DEBUG,
      httpResponseType: 'json'
    },
      {
        serverProvider: {
          provide: TOKEN_LOGGER_SERVER_SERVICE, useClass: CustomLoggerService
        }
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
