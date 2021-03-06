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
var car_service_1 = require('./car.service');
var car_detail_component_1 = require('./car-detail.component');
var CarsComponent = (function () {
    function CarsComponent(router, carService) {
        this.router = router;
        this.carService = carService;
        this.mode = 'Observable';
    }
    CarsComponent.prototype.getCars = function () {
        var _this = this;
        this.carService.getCars()
            .subscribe(function (cars) { return _this.cars = cars; }, function (error) { return _this.errorMessage = error; });
        /*.then(cars => this.cars = cars)
        .catch(error => this.error = error); // TODO: Display error message
   */ };
    CarsComponent.prototype.ngOnInit = function () {
        this.getCars();
    };
    CarsComponent.prototype.onSelect = function (car) {
        this.selectedCar = car;
    };
    CarsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['CarDetail', { id: this.selectedCar.id }]);
    };
    CarsComponent = __decorate([
        core_1.Component({
            selector: 'my-cars',
            templateUrl: 'app/cars.component.html',
            styleUrls: ['app/cars.component.css'],
            directives: [car_detail_component_1.CarDetailComponent]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, car_service_1.CarService])
    ], CarsComponent);
    return CarsComponent;
}());
exports.CarsComponent = CarsComponent;
//# sourceMappingURL=coupes.component.js.map