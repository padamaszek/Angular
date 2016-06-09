"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var http_1 = require('@angular/http');
var dashboard_component_1 = require('./dashboard.component');
var cars_component_1 = require('./cars.component');
/*import { HatchbagsComponent }     from './hatchbags.component';
import { SedansComponent }     from './sedans.component';
import { CoupesComponent }     from './coupes.component';*/
var car_detail_component_1 = require('./car-detail.component');
var car_service_1 = require('./car.service');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Cars';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <nav>\n      <a [routerLink]=\"['Dashboard']\">Dashboard</a>\n      <a [routerLink]=\"['Cars']\">Cars</a>\n      <a [routerLink]=\"['Hatchbags']\">Hatchbags</a>\n            <a [routerLink]=\"['Sedans']\">Sedans</a>\n            <a [routerLink]=\"['Coupes']\">Coupes</a>\n\n    </nav>\n    <router-outlet></router-outlet>\n  ",
            styleUrls: ['app/app.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                car_service_1.CarService,
                http_1.HTTP_PROVIDERS
            ]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/dashboard', name: 'Dashboard', component: dashboard_component_1.DashboardComponent, useAsDefault: true },
            { path: '/detail/:id', name: 'CarDetail', component: car_detail_component_1.CarDetailComponent },
            { path: '/cars', name: 'Cars', component: cars_component_1.CarsComponent },
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map