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
var car_1 = require('./car');
var car_service_1 = require('./car.service');
var CarDetailComponent = (function () {
    function CarDetailComponent(carService, routeParams) {
        this.carService = carService;
        this.routeParams = routeParams;
        this.close = new core_1.EventEmitter();
        this.navigated = false; // true if navigated here
    }
    CarDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.routeParams.get('id') !== null) {
            var id = +this.routeParams.get('id');
            this.navigated = true;
            this.carService.getCar(id)
                .then(function (car) { return _this.car = car; });
        }
        else {
            this.navigated = false;
            this.car = new car_1.Car();
        }
    };
    CarDetailComponent.prototype.save = function () {
        var _this = this;
        this.carService
            .save(this.car)
            .then(function (car) {
            _this.car = car; // saved car, w/ id if new
            _this.goBack(car);
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    CarDetailComponent.prototype.goBack = function (savedCar) {
        if (savedCar === void 0) { savedCar = null; }
        this.close.emit(savedCar);
        if (this.navigated) {
            window.history.back();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', car_1.Car)
    ], CarDetailComponent.prototype, "car", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CarDetailComponent.prototype, "close", void 0);
    CarDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-car-detail',
            templateUrl: 'app/car-detail.component.html',
            styleUrls: ['app/car-detail.component.css']
        }), 
        __metadata('design:paramtypes', [car_service_1.CarService, router_deprecated_1.RouteParams])
    ], CarDetailComponent);
    return CarDetailComponent;
}());
exports.CarDetailComponent = CarDetailComponent;
