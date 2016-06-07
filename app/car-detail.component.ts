import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Car }        from './car';
import { CarService } from './car.service';

@Component({
  selector: 'my-car-detail',
  templateUrl: 'app/car-detail.component.html',
  styleUrls: ['app/car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  @Input() car: Car;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here

  constructor(
    private carService: CarService,
    private routeParams: RouteParams) {
  }

  ngOnInit() {
    if (this.routeParams.get('id') !== null) {
      let id = +this.routeParams.get('id');
      this.navigated = true;
      this.carService.getCar(id)
          .then(car => this.car = car);
    } else {
      this.navigated = false;
      this.car = new Car();
    }
  }
  save() {
    this.carService
        .save(this.car)
        .then(car => {
          this.car = car; // saved car, w/ id if new
          this.goBack(car);
        })
        .catch(error => this.error = error); // TODO: Display error message
  }
  goBack(savedCar: Car = null) {
    this.close.emit(savedCar);
    if (this.navigated) { window.history.back(); }
  }
}
