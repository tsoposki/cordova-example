import { Component } from '@angular/core';
import { LocationService } from './services/location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private locationService: LocationService) {
    this.locationService.getLocations().subscribe(val => console.log(val));
  }
}
