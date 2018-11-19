import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationService } from 'src/app/services';
import { ILocation } from 'src/tests';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapViewComponent {
  location$: Observable<ILocation>;
  markers$: Observable<Array<ILocation>>;

  constructor(private locationService: LocationService) {
    this.location$ = this.locationService.getLocation().pipe(shareReplay(1));
    this.markers$ = this.locationService.getLocations().pipe(shareReplay(1));
  }
}
