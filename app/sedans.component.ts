import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router-deprecated';

import { Car }                from './car';
import { CarService }         from './car.service';
import { CarDetailComponent } from './car-detail.component';

@Component({
  selector: 'my-cars',
  templateUrl: 'app/cars.component.html',
  styleUrls: ['app/cars.component.css'],
  directives: [CarDetailComponent]
})
export class CarsComponent implements OnInit {
  cars: Car[];
  selectedCar: Car;
errorMessage: string;
mode = 'Observable';

  constructor(
    private router: Router,
    private carService: CarService) { }

  getCars() {
    this.carService.getCars()
      .subscribe(cars => this.cars = cars,
                       error =>  this.errorMessage = <any>error);
      /*.then(cars => this.cars = cars)
      .catch(error => this.error = error); // TODO: Display error message
 */ }

  ngOnInit() {
    this.getCars();
  }

  onSelect(car: Car) {
    this.selectedCar = car;
  }

  gotoDetail() {
    this.router.navigate(['CarDetail', { id: this.selectedCar.id }]);
  }
}
