import { Injectable } from '@angular/core';

@Injectable()
export class GeolocationService {
  options: PositionOptions = {
    enableHighAccuracy: true,
    timeout: 5 * 1000,
    maximumAge: 10 * 1000
  };

  constructor() { }

  findCurrentLocation(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => resolve(position), (err) => reject(err), this.options);
    });
  }
}
