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
var CarDetailComponent = (function () {
    function CarDetailComponent(_teamService, _routeParams) {
        this._teamService = _teamService;
        this._routeParams = _routeParams;
    }
    CarDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this._routeParams.get('id');
        this._teamService.getCar(id)
            .subscribe(function (car) { return _this.car = car; }, function (error) { return _this.errorMessage = error; });
    };
    CarDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], CarDetailComponent.prototype, "car", void 0);
    CarDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-team-detail',
            templateUrl: 'app/team-detail.component.html',
            styleUrls: ['app/team-detail.component.css']
        }), 
        __metadata('design:paramtypes', [car_service_1.CarService, router_deprecated_1.RouteParams])
    ], CarDetailComponent);
    return CarDetailComponent;
}());
exports.CarDetailComponent = CarDetailComponent;
//# sourceMappingURL=car-detail.component.js.map