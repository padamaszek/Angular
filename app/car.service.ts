import { Injectable }    from '@angular/core';
import { Headers, Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { Car } from './car';


@Injectable()
export class CarService {


 errorMessage: string;

  constructor(private http: Http) { }
    
    _url: string = 'http://localhost:8000/cars'
    _url2: string = 'http://localhost:8000/car/'

    getCars(): Observable<Car[]> {
        return this.http.get(this._url)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }
    
    getCar(id: number): Observable<Car[]> {
        return this.http.get(this._url2 + id)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }
  
  private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
  
  
}