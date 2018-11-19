import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { citiesInUk, ILocation, ukLocation } from 'src/tests';

@Injectable()
export class LocationService {
  constructor() {}

  getLocation(): Observable<ILocation> {
    return of(ukLocation);
  }

  getLocations(): Observable<Array<ILocation>> {
    return of(citiesInUk.slice(0, 10));
  }
}
