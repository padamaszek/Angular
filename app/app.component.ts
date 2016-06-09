import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';

import { DashboardComponent }  from './dashboard.component';
import { CarsComponent }     from './cars.component';
/*import { HatchbagsComponent }     from './hatchbags.component';
import { SedansComponent }     from './sedans.component';
import { CoupesComponent }     from './coupes.component';*/

import { CarDetailComponent } from './car-detail.component';
import { CarService }         from './car.service';

@Component({
  selector: 'my-app',

  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Cars']">Cars</a>
      <a [routerLink]="['Hatchbags']">Hatchbags</a>
            <a [routerLink]="['Sedans']">Sedans</a>
            <a [routerLink]="['Coupes']">Coupes</a>

    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
   providers: [
    ROUTER_PROVIDERS,
    CarService,
    HTTP_PROVIDERS
  ]
})
@RouteConfig([
  { path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
  { path: '/detail/:id', name: 'CarDetail', component: CarDetailComponent },
  { path: '/cars', name: 'Cars', component: CarsComponent },
  /*{ path: '/hatchbags', name: 'Hatchbags', component: HatchbagsComponent },
  { path: '/sedans', name: 'Sedans', component: SedansComponent },
   { path: '/coupes', name: 'Coupes', component: CoupesComponent }*/
])
export class AppComponent {
  title = 'Tour of Cars';
}
