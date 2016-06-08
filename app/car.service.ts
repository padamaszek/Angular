import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Car } from './car';

@Injectable()
export class CarService {

  private carsUrl = 'app/cars';  // URL to web api
  constructor(private http: Http) { }


  getCars(): Promise<Car[]> {
    
    return this.http.get(this.carsUrl)
             .toPromise()
           .then(response => response.json().data)
         .catch(this.handleError);
  }

  getCar(id: number) {
    return this.getCars()
               .then(cars => cars.filter(car => car.id === id)[0]);
  }

  save(car: Car): Promise<Car>  {
    if (car.id) {
      return this.put(car);
    }
    return this.post(car);
  }

  delete(car: Car) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.carsUrl}/${car.id}`;

    return this.http
               .delete(url, headers)
               .toPromise()
               .catch(this.handleError);
  }

  // Add new Car
  private post(car: Car): Promise<Car> {
    let headers = new Headers({
      'Content-Type': 'application/json'});

    return this.http
               .post(this.carsUrl, JSON.stringify(car), {headers: headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }

  // Update existing Car
  private put(car: Car) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.carsUrl}/${car.id}`;

    return this.http
               .put(url, JSON.stringify(car), {headers: headers})
               .toPromise()
               .then(() => car)
               .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/