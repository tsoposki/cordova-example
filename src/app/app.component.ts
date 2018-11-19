import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ILocation } from 'src/tests/mock-data/models/location.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mapLocation$: Observable<ILocation>;
  markers$: Observable<Array<ILocation>>;

  constructor() {}
}
