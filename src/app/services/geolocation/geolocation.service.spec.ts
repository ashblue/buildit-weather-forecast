import { TestBed, inject } from '@angular/core/testing';

import { GeolocationService } from './geolocation.service';

describe('GeolocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeolocationService]
    });
  });

  it('should be created', inject([GeolocationService], (service: GeolocationService) => {
    expect(service).toBeTruthy();
  }));

  // @NOTE Would make for a good end-2-end test
  it('returns the current user location in a promise', inject([GeolocationService], (service: GeolocationService) => {
      spyOn(window.navigator.geolocation, 'getCurrentPosition').and.callFake( (success) => {
        success({});
      });

      service.findCurrentLocation()
        .then((result) => {
          expect(result).toBeTruthy();
        });
  }));

  // @NOTE Would make for a good end-2-end test
  it('returns a rejected promise if the user denies the location API', inject([GeolocationService], (service: GeolocationService) => {
    spyOn(window.navigator.geolocation, 'getCurrentPosition').and.callFake( (success, error) => {
      error({});
    });

    service.findCurrentLocation()
      .catch((result) => {
        expect(result).toBeTruthy();
      });
  }));
});
