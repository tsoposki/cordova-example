import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ILocation } from 'src/tests';
import { LocationService } from 'src/app/services';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListViewComponent {
  locations$: Observable<Array<ILocation>>;

  constructor(private locationService: LocationService) {
    this.locations$ = this.locationService.getLocations().pipe(shareReplay(1));
  }
}
