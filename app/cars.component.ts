import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router-deprecated';

import { Car }                from './car';
import { CarService }         from './car.service';
import { CarDetailComponent } from './car-detail.component';

@Component({
  selector: 'my-cars',
  templateUrl: 'app/cars.component.html',
  styleUrls:  ['app/cars.component.css'],
  directives: [CarDetailComponent]
})
export class CarsComponent implements OnInit {
  cars: Car[];
  selectedCar: Car;
  addingCar = false;
  error: any;

  constructor(
    private router: Router,
    private carService: CarService) { }

  getCars() {
    this.carService
        .getCars()
        .then(cars => this.cars = cars)
        .catch(error => this.error = error); // TODO: Display error message
  }

  addCar() {
    this.addingCar = true;
    this.selectedCar = null;
  }

  close(savedCar: Car) {
    this.addingCar = false;
    if (savedCar) { this.getCars(); }
  }

  delete(car: Car, event: any) {
    event.stopPropagation();
    this.carService
        .delete(car)
        .then(res => {
          this.cars = this.cars.filter(h => h !== car);
          if (this.selectedCar === car) { this.selectedCar = null; }
        })
        .catch(error => this.error = error); // TODO: Display error message
  }

  ngOnInit() {
    this.getCars();
  }

  onSelect(car: Car) {
    this.selectedCar = car;
    this.addingCar = false;
  }

  gotoDetail() {
    this.router.navigate(['CarDetail', { id: this.selectedCar.id }]);
  }
}
