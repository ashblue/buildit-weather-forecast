import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WeatherService } from '../../services/weather/weather.service';
import { GeolocationService } from '../../services/geolocation/geolocation.service';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.scss']
})
export class SearchLocationComponent implements OnInit {
  loading: boolean;
  errMessage: string;
  search: string;

  @Output() onCity = new EventEmitter<string>();
  @Output() onZipCode = new EventEmitter<string>();
  @Output() onCoordinates = new EventEmitter<string>();

  constructor(
    private geolocationService: GeolocationService
  ) { }

  ngOnInit() {
  }

  submitSearch() {
    if (this.loading) {
      return;
    }

    this.errMessage = null;

    if (WeatherService.stringIsCity(this.search)) {
      this.onCity.emit(this.search);
      this.search = null;
    } else if (WeatherService.stringIsZipCode(this.search)) {
      this.onZipCode.emit(this.search);
      this.search = null;
    } else {
      this.errMessage = 'Must be a valid zip or city';
    }
  }

  findMe() {
    if (this.loading) {
      return;
    }

    this.loading = true;

    this.geolocationService.findCurrentLocation()
      .then((location) => {
        this.onCoordinates.emit(location);
        this.search = null;
        this.loading = false;
      })
      .catch((err) => {
        this.errMessage = err.message;
        this.loading = false;
      });
  }
}
