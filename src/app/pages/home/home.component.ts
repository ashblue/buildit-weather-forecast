import { Component, OnInit } from '@angular/core';
import { GeolocationService } from '../../services/geolocation/geolocation.service';
import { ModelForecast } from '../../models/forecast/forecast';
import { WeatherService } from '../../services/weather/weather.service';
import * as moment from 'moment';
import { ModelForecastDay } from '../../models/forecast/day';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  errorMessage: string;
  loading: boolean;
  forecast: ModelForecast;
  forecastDays: ModelForecastDay[] = [];

  constructor(
    private geolocationService: GeolocationService,
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.loadBegin();

    this.geolocationService.findCurrentLocation()
      .then((coordinates) => {
        this.searchByCoordinates(coordinates);
      }, (err) => {
        this.loadEnd();
      });
  }

  searchByCity(city: string) {
    this.loadBegin();

    this.weatherService.getDailyForecastByCity(city)
      .then(this.forecastSuccess, this.forecastError);
  }

  searchByZipCode(zipCode: string) {
    this.loadBegin();

    this.weatherService.getDailyForecastByZip(zipCode)
      .then(this.forecastSuccess, this.forecastError);
  }

  searchByCoordinates(coordinates: any) {
    this.loadBegin();

    this.weatherService.getDailyForecastByCoordinates(coordinates.coords.latitude, coordinates.coords.longitude)
      .then(this.forecastSuccess, this.forecastError);
  }

  /**
   * Promise success promise handling
   * @param forecast
   */
  private forecastSuccess = (forecast: ModelForecast) => {
    this.forecast = forecast;

    // Break up the forecast into day chunks
    this.forecastDays.length = 0;
    for (let i = 0; i < 6; i++) {
      const day = moment().add(i, 'days').format('l');

      const entries = forecast.list.filter((entry) => {
        return day === moment(entry.dt_txt).format('l');
      });

      if (entries.length > 0) {
        this.forecastDays.push({entries});
      }
    }

    this.loadEnd();
  };

  /**
   * Forecast error promise handling
   * @param err
   */
  private forecastError = (err) => {
    this.errorMessage = err;
    this.loadEnd();
  };

  /**
   * Trigger when an async load has started
   */
  private loadBegin() {
    this.loading = true;
    this.forecast = null;
    this.errorMessage = null;
  }

  /**
   * Trigger when an async load has completed
   */
  private loadEnd() {
    this.loading = false;
  }
}
