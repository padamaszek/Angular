import { Component, OnInit } from '@angular/core';
import { Router }           from '@angular/router-deprecated';

import { Car }        from './car';
import { CarService } from './car.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  
  constructor(
    private router: Router,
    private carService: CarService) {
  }

  errorMessage: string;
  cars: Car[];

  ngOnInit() {
 this.carService.getCars()
      .subscribe(cars => this.cars = cars,
                       error =>  this.errorMessage = <any>error);
    /*.then(cars => this.cars = cars.filter(cars => cars.horsepower > 300));*/
  }

  gotoDetail(car: Car) {
    let link = ['CarDetail', { id: car.id }];
    this.router.navigate(link);
  }
}
