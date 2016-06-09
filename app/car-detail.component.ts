import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Car }        from './car';
import { CarService } from './car.service';
@Component({
  selector: 'my-team-detail',
  templateUrl: 'app/team-detail.component.html',
  styleUrls: ['app/team-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  @Input() car: Car[];
  
  errorMessage: string;

  constructor(
    private _teamService: CarService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._teamService.getCar(id)
      .subscribe(car => this.car = car,
                       error =>  this.errorMessage = <any>error);                 
  }
  
  

  goBack() {
    window.history.back();
  }
}
