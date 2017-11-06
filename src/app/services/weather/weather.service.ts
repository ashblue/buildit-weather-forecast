import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import { ModelForecast } from '../../models/index';

// @TODO This should be hidden behind a back-end to prevent the API key from being abused or stolen
const API_KEY = '3800b0c2a0b4e4624087b6ee7b2ae0f9';

const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast';

@Injectable()
export class WeatherService {

  // @TODO Error reporting could be better standardized
  constructor(
    private http: HttpClient
  ) { }

  static stringIsCity(query: string): boolean {
    return !(!query || !query.match(/^[a-zA-Z]+$/));
  }

  static stringIsZipCode(query: string): boolean {
    return !(!query || query.length < 5 || query.match(/[a-z]/i));
  }

  getDailyForecastByCity(city: string): Promise<ModelForecast> {
    if (!WeatherService.stringIsCity(city)) {
      return Promise.reject('City is invalid');
    }

    return this.http.get(`${BASE_URL}?appid=${API_KEY}&q=${city},us`)
      .toPromise()
      .then(res => res, this.handleError);
  }

  getDailyForecastByZip(zipCode: string): Promise<ModelForecast> {
    if (!WeatherService.stringIsZipCode(zipCode)) {
      return Promise.reject('Zip code is invalid');
    }

    const zipCodeClean = zipCode.slice(0, 5);

    return this.http.get(`${BASE_URL}?appid=${API_KEY}&zip=${zipCodeClean},us`)
      .toPromise()
      .then(res => res, this.handleError);
  }

  getDailyForecastByCoordinates(latitude: number, longitude: number): Promise<ModelForecast> {
    if (!latitude || !longitude) {
      return Promise.reject('Coordinates are invalid');
    }

    return this.http.get(`${BASE_URL}?appid=${API_KEY}&lat=${latitude}&lon=${longitude}`)
      .toPromise()
      .then(res => res, this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error);
  }
}
