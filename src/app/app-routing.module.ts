import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { 
    path: 'about',
    component: AboutComponent
  }, 
  {
    path: 'report',
    component: ReportComponent
  },
  {
    path: 'map',
    component: MapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
